




class Personne {
    
  constructor(id, fname, lname, country) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.country = country;
  }

//   get fname() {
//     return fname;
//   }

//   set fname(value) {
//     this.fname = value;
//   }
    getFname = () => {
      return this.fname;
    };

    setFname=(fname)=>{
        this.fname=fname
    }

    getLname = () => {
      return this.lname;
    };

    setLname=(lname)=>{
        this.lname=lname
    }

    fullName=()=>{
        return this.fname+" "+this.lname;
    }



//   get lname() {
//     return this.lname;
//   }

//   set lname(lname) {
//     this.lname = lname;
//   }
}


class SuperHeros extends Personne{
   constructor(id, fname, lname, country,type){
       super(id, fname, lname, country);
       this.type=type;
   }
}



const chris = new Personne(1, "christian", "lisangola", "France");
