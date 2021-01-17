var playerturn=1;

function check()
{
  var row=document.getElementsByClassName('row');

  var matrix=[];

  for(var i=0;i<row.length;i++)
  {
    matrix.push(row[i].getElementsByClassName('col'));
  }
  var draw=0;
  
  for(var i=0;i<matrix.length;i++)
  {
    var rx=0; var cx=0; 
    var ry=0; var cy=0; 


    for(var j=0;j<matrix[i].length;j++)
    {
      if(matrix[i][j].innerText=='X')
       {
         rx++;
       }
       if(matrix[i][j].innerText=='O')
       {
         ry++;
       }

       if(matrix[j][i].innerText=='X')
       {
         cx++;
       }
       if(matrix[j][i].innerText=='O')
       {
         cy++;
       }

       if(matrix[i][j].innerText=='-')
       {
         draw++;
       }
    }

    if(rx==3 || ry==3 || cx==3 || cy==3)
    {
      return 1;
    }
    
  }
  var dx=0; var dy=0;

  for(var i=0;i<matrix.length;i++)
  {
    if(matrix[i][i].innerText=='X')
    {
      dx++;
    }

    if(matrix[i][i].innerText=='O')
    {
      dy++;
    }
  }

  if(dx==3 || dy==3)
  {
    return 1;
  }

  
  var value=matrix[1][1].innerText;

  if(value==matrix[0][2].innerText && value==matrix[2][0].innerText && value!='-')
  {
    return 1;
  }

  if(draw==0)
  {
    return 2;
  }


  return 0;

}


function play(elem)
{
  var value= elem.getElementsByClassName('colval')[0].innerText
  if(value!='-')
  {
    alert('Invalid Move')

  }
  else if(playerturn==1)
  {
    document.getElementById('display').innerHTML='Player two turn';
    elem.getElementsByClassName('colval')[0].innerText='X';
    playerturn=2;

  }
  else if(playerturn=2)
  {
    document.getElementById('display').innerHTML='Player one turn';

    elem.getElementsByClassName('colval')[0].innerText='O';
    playerturn=1;
  }


  var gamecheck=check();
  console.log(gamecheck);

  if(gamecheck==1 && playerturn==2)
  {
    document.getElementById('display').innerText='Player one Won';
  }

  else if(gamecheck==1)
  {
    document.getElementById('display').innerText='Player two Won';
  }
  else if(gamecheck==2)
  {
    document.getElementById('display').innerText='Its a Draw';
  }

}