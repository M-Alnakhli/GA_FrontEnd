
charGamming=[0,0]
gameSteps=[]
numberSimilar = 0
let counter = 0
//let array =[[0,0,0],[0,0,0],[0,0,0]]
$('.game').css("visibility", "hidden");
$('.game').hide()   

games=[]
 x=0
 y = 0
 

$('#start').click(function(){
    if(parseInt($('#num').val()) <= parseInt($('#similar').val())&&parseInt($('#similar').val())!= 0) {
        alert('number of similarety should be less then the the number of cells to choose all cells u sould pick "all"!!  ')
    }
    else{
        numberSimilar = parseInt($('#similar').val())
        modify((parseInt($('#num').val())),$('#char').val())    
    $('.menue').hide();
 }})


$(document).on('click', '.cel', theGame);



 function theGame(){
    //condition check if the current cell inclue banana or an apple 
    bananIN= $(this).find(">:first-child").attr('alt')!=('Banana')
    appleIN=$(this).find(">:first-child").attr('alt')!=('fruit')
    
    if($('.cel').length &&bananIN&&appleIN){
        x=parseInt($(this).attr('matrixlocation'))
        if(counter%2==0){
            games[x]=2
            $(this).html('<img src="../images/banana_1.png" alt="Banana" height="100%" width="100%">');
            $('audio#banana')[0].play()
            gameSteps.unshift([['x',$(this).attr('matrixlocation')]])
        }
        else{$(this).html('<img src="../images/fruit.png" alt="fruit" height="75%" width="75%">');
        games[x]=1
        $('audio#aka')[0].play()
        gameSteps.unshift([['o',$(this).attr('matrixlocation')]])
    }
    setTimeout(function() {thisIsIt(games)},100);
    setTimeout(function() {checkTie(counter)},100);
        counter++
    }};
  

  

  function checkTie(gameSteps){
    if(gameSteps==9){
        alert('this is the end....hold your breath and count to ten!!!!')
    
    }
  }





function checkTrue(i){
    for3 = false 
    for4 = false 
    for5 = false  

   if(numberSimilar==0){ 
    return i.every( (val, i, arr) => val == arr[0] && val!==0  )
    
    }

    if(numberSimilar == 3&&games.length>9){
        for3= i.some( (val, i, arr) => val == arr[i-1] && val == arr[i-2]&& val!=0  )
        console.log(for3)
        return for3
    }
    if(numberSimilar == 4&&games.length>16){
        for4 =  i.some( (val, i, arr) => val == arr[i-1] && val == arr[i-2]&&val == arr[i-3]&& val!=0  )
        return for4
    }
    if(numberSimilar == 5&&games.length>25){
        for5= i.some( (val, i, arr) => val == arr[i-1] && val == arr[i-2]&&val == arr[i-3]&& arr[i-4]&&val!=0  )
        return for5 
    }
}



 

function rawCheck(matrix){
    inColumn=matrix.length**(1/2)
    let column=[]
    for(i=0;i<inColumn;i++){
        for(j=0;j<inColumn;j++){
        column.push(matrix[j+(i*inColumn)])
        
         }
         if(checkTrue(column)){
             return true
         }
         column=[]
        }
      return false
    }
    
function columCheck(matrix){
    inColumn=matrix.length**(1/2)
    
    column=[]
    for(j=0;j<inColumn;j++){
    for(i=0;i<inColumn;i++){
        column.push(matrix[(inColumn)*i+j])
    }
    console.log(column)
         if(checkTrue(column)){
             return true
         }
         column=[]
        }
      return false
    
}



function dilogCheck(matrix){
    dilogRight=[]
    diologLeft=[]
    thesmal =matrix.length**(1/2)
    console.log(matrix)
    for(k=0;k<thesmal;k++){
        dilogRight.push(matrix[thesmal*k+(thesmal-1-k)])
        diologLeft.push(matrix[(thesmal*k)+k])
    }
    console.log(diologLeft)
    console.log(dilogRight)
    
     return(checkTrue(diologLeft)||checkTrue(dilogRight))

}




function thisIsIt(i){

    console.log(i)
    if(dilogCheck(i)||columCheck(i)||rawCheck(i)){
        alert('baby shshshshsshsh dududaahah ')
    }
    }
    




function cnsoleAlert(bb){
    if(bb){
        alert('yor god dammin right!!!!')
     }
    }



 
//modify the gameyour self
function modify(num,ch){
    //getting the heigh and width of the game container 
    
    theTotalNumber = num*num
    theNew = num+1
    games =new Array(theTotalNumber).fill(0);
    //resize the width and hoght of the cells and mak it always 
    //calculating the number  of reqiuered cells
    for(k=0;k<theTotalNumber;k++){
        $('.game').append(`<div class ='cel' matrixLocation='${k}'>`)  
        
    }
    
    if(games.length==16){
        if (window.innerWidth <= 360){
            $('.game').find('.cel').css({'width':'23.48%','height':'23.55%'})
        }
        else if (window.innerWidth <= 380){
            $('.game').find('.cel').css({'width':'23.7%','height':'23.7%'})
        }
        else if (window.innerWidth <= 800){
            $('.game').find('.cel').css({'width':'24.2%','height':'24.2%'})
        }

        else{
        $('.game').find('.cel').css({'width':'23%','height':'23%'})}
     }
     if(games.length==25){
        if (window.innerWidth <= 360){
            $('.game').find('.cel').css({'width':'18.5%','height':'18.6%'})
        }
        else if (window.innerWidth <= 360){
            $('.game').find('.cel').css({'width':'18.5%','height':'18.6%'})
        }
        else if (window.innerWidth <= 800){
            $('.game').find('.cel').css({'width':'19.35%','height':'19.2%'})
        }
        else{
         $('.game').find('.cel').css({'width':'18%','height':'18%'})}
     }
     
     if(games.length==36){
        if (window.innerWidth <= 360){
            $('.game').find('.cel').css({'width':'15.15%','height':'15.3%'})
            
        }
        if (window.innerWidth <= 800){
            $('.game').find('.cel').css({'width':'16.03%','height':'16%'})
            
        }
         else{$('.game').find('.cel').css({'width':'14%','height':'14%'})
     }
    }

    $('.menue').css("visibility", "hidden");
    $('.game').css("visibility", "visible");
    $('.game').show()   

}


