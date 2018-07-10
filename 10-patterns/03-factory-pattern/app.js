function MemberFactory(){
    this.createMember = function(name, type){
        let member;
        
        if(type === 'simple'){
            member = new SimpleMemberShip(name);
        }else if(type === 'standard'){
            member = new StandardMemberShip(name);
        }else if(type === 'super'){
            member = new SuperMemberShip(name);
        }
        member.type = type;
        member.define = function(){
            console.log(`${this.name}(${this.type} : ${this.cost})`);
        }
        return member;
    }
}

// Create each class
const SimpleMemberShip = function(name){
    this.name = name;
    this.cost = '$5';
}
const StandardMemberShip = function(name){
    this.name = name;
    this.cost = '$15';
}
const SuperMemberShip = function(name){
    this.name = name;
    this.cost = '$25';
}

const member = [];
const factory = new MemberFactory();
member.push(factory.createMember('John', 'simple'));
member.push(factory.createMember('Mark', 'super'));
member.push(factory.createMember('Thomase', 'standard'));
//console.log(member);

member.forEach((member)=>{
    member.define();
});