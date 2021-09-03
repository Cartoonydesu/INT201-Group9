const player = new Object({name:"player", score:0});
const question = [
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคเหนือ",
    choice:{
        1:"1.เชียงราย",
        2:"2.เชียงใหม่",
        3:"3.พะเยา",
        4:"4.สตูล"
    },
    answer:4
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคใต้",
    choice:{
        1:"1.ชลบุรี",
        2:"2.ยะลา",
        3:"3.ปัตตานี",
        4:"4.สตูล"
    },
    answer:1
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคตะวันออก",
    choice:{
        1:"1.ชลบุรี",
        2:"2.ฉะเชิงเทรา",
        3:"3.เพชรบุรี",
        4:"4.ปราจีนบุรี"
    },
    answer:3
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคกลาง",
    choice:{
        1:"1.กรุงเทพ",
        2:"2.นครปฐม",
        3:"3.นนทบุรี",
        4:"4.กาญจนบุรี"
    },
    answer:4
},
{
    topic:"จังหวัดไหนไม่ได้อยู่ในภาคตะวันออกเฉียงเหนือ",
    choice:{
        1:"1.นครราชสีมา",
        2:"2.นครศรีธรรมราช",
        3:"3.ชัยภูมิ",
        4:"4.อุบลราชธานี"
    },
    answer:1
},]


const answerCheck = (playerObjectPlay , ans1 , ans2 , ans3 , ans4 , ans5) => {
    answerSet = new Array();
    answerSet.push(ans1,ans2,ans3,ans4,ans5)
    let selectQuestion = new Array();
    for(let j in answerSet){
        if(answerSet[j] == 1 || answerSet[j] == 2 || answerSet[j] == 3 || answerSet[j] == 4){
         selectQuestion.push(j)
        }
    }
    playerObjectPlay.answerSet = answerSet
    playerObjectPlay.selectQuestion = selectQuestion
    for(let i in question){
        if(question[i].answer == answerSet[i]){
            playerObjectPlay.score ++
        }
    }
    console.log(playerObjectPlay)
}
const playerPlay = (name , ans1 , ans2 , ans3 , ans4,ans5) => {
    let playerObjectPlay = new Object(player)
    playerObjectPlay.name = name;
    playerObjectPlay.score = 0;
    answerCheck(playerObjectPlay , ans1 , ans2 , ans3 , ans4 ,ans5);
}

const showSummary = (playerObjectPlay) => {
    console.log(`Name: ${playerObjectPlay.name} Score:${playerObjectPlay.score}`)
}
playerPlay("Thiraphat" , 4 , 1 ,3, 4 , 1);
playerPlay("John" , 3, 4 ,3, 4 , 2);
playerPlay("Mark" , 2 , 4 ,3, 4 , 3);
playerPlay("Ed" , 2 , 4 ,3, null , 3);
playerPlay("Natty" , 0 , 0 ,3, 4 , 3);