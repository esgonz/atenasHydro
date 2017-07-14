import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class FormulaSqlStorage {

    storage: any;
    DB_NAME: string = '__ionicstorage';

    constructor(public platform: Platform, public sqlite: SQLite) {

        this.platform.ready().then(() => {

            this.sqlite.create({ name: this.DB_NAME, location: 'default' })
                .then((db: SQLiteObject) => {
                    this.storage = db;
                    this.tryInit();
            });
        });
    }

    tryInit() {
        this.query('CREATE TABLE IF NOT EXISTS formula (formulaId text primary key, formulaObject text)')
        .catch(err => {
            console.error('Unable to create initial storage tables', err.tx, err.err);
        });
    }

    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form 
     * { tx: Transaction, res: Result (or err)}
     */
    query(query: string, params: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.storage.transaction((tx: any) => {
                        tx.executeSql(query, params,
                            (tx: any, res: any) => resolve({ tx: tx, res: res }),
                            (tx: any, err: any) => reject({ tx: tx, err: err }));
                    },
                    (err: any) => reject({ err: err }));
            } catch (err) {
                reject({ err: err });
            }
        });
    }

    /** GET the value in the database identified by the given formulaId. */
    get(formulaId: string): Promise<any> {
        return this.query('select formulaId, value from formula where formulaId = ? limit 1', [formulaId])
        .then(data => {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    }

    /** SET the formulaObject in the database for the given formulaId. */
    set(formulaId: string, formulaObject: string): Promise<any> {
        return this.query('insert into formula(formulaId, formulaObject) values (?, ?)', [formulaId, formulaObject]);
    }

    /** REMOVE the value in the database for the given key. */
    remove(formulaId: string): Promise<any> {
        return this.query('delete from formula where formulaId = ?', [formulaId]);
    }
}