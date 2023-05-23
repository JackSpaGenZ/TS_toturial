class Graphic {
   private _id!: number;
   private _name!: string;
   public get id() {
      return this._id;
   }
   public set id(Theid: number) {
      this._id = Theid;
   }
   public get name() {
      return this._name;
   }
   public set name(Thename: string) {
      this._name = Thename;
   }
   getInforGrapher(): string {
      return `id : ${this.id} \nname : ${this.name}`;
   }
}

let polygon = new Graphic();
polygon.id = 3;
polygon.name = 'Polygon';
console.log(polygon.getInforGrapher());
