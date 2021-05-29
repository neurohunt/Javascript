// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
    return {
    dna : array,
    specimenNum: number,
    mutate () {
      let newarray =[];
      for (let i=0;i<array.length;i++) {
        let changedDna = returnRandBase();
        while (changedDna === array[i]) {
            changedDna = returnRandBase();
          }
        newarray.push(changedDna);
        this.dna = newarray;
      }
    },
    compareDNA (object) {
        let count =0;
        for (let i=0;i<this.dna.length;i++) {
          if (this.dna[i] === object.dna[i]) {
            count = count + 1;
          }
        }
        let comparingpercent = Math.floor((count/this.dna.length)*100);
        console.log(`specimen ${this.specimenNum} and ${object.specimenNum} have ${comparingpercent}% DNA in common`);
    },
    willLikelySurvive() {
      let survivalmetric = 0
      for (let i=0;i<this.dna.length;i++) {
          if (this.dna[i] === 'G' || this.dna[i] === 'C') {
            survivalmetric =survivalmetric + 1;
          }
      }
      if ((survivalmetric/this.dna.length)> 0.6) {
        return true;
      }
      else {
        return false;
      }

    }
  }
}

const newstrand = mockUpStrand();
const newstrand2 = mockUpStrand();
const newcreature = pAequorFactory(12512, newstrand);
const newcreature2 = pAequorFactory(12522, newstrand2);


