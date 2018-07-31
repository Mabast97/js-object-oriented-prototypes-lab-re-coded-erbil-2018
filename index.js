function BoardMember(name, homeState, training )
{
  this.name = name;
  this.training = training;
  this.homeState = homeState;
}

BoardMember.prototype.veto = function (){ return ("No, I must disagree"); }
BoardMember.prototype.approve = function(){ return ("You can do that!"); }
BoardMember.prototype.doCharity = function(){ return ("I like to help people."); }
BoardMember.prototype.releasePressStatement = function(){ return ("You will see great things from Scuber."); }
BoardMember.prototype.sayHi = 


let polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");