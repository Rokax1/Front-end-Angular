export class Mensajes{

    constructor(
        public id_mensajes: number,
        public 	fk_actividad:number,
        public fk_user: number,
        public descripcion_mensaje: string,
        public created_at:Date

    ){

    }
}