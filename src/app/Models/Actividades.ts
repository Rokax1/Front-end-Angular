export class Actividades{

    constructor(
        public id_actividad: number,
        public titulo:string,
        public archivo: string,
        public descripcion:string,
        public estado_actividad:string,
        public fk_user_creador_actividad:number,
        public fk_area_actividad:any,
        public fk_user_encargado:any,
        public user_creador: any,
        public usuario: any
    ){

    }

  
}