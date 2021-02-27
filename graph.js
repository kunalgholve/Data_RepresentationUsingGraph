

	var str=JSON.stringify(data);
	var jsond=JSON.parse(str);

	var options ={
        style:'bar',
	stack:true,
        barChart: {width:70, align:'center'}, // align: left, center, right
		drawPoints:false,
        dataAxis: {
            icons:false,
	    left:{title:{text:'Marks'}}
        },
	orientation:'bottom',
        start: '2014-06-10',
        end: '2014-06-28',
		showMinorLabels:false,
		showMajorLabels:false,
   	};
	
	var jdata=JSON.stringify(options);
	var jsopt=JSON.parse(jdata);

	var graph2d1,graph2d2,graph2d3,graph2d4,graph2d5,graph2d6,graph2d7,graph2d8,graph2d9,graph2d10,graph2d11,graph2d12,graph2d13,graph2d14,
	graph2d15,graph2d16,graph2d17,graph2d18,graph2d19,graph2d20,graph2d21,graph2d22,graph2d23,graph2d24,graph2d25,graph2d26,graph2d27,graph2d28
	,graph2d29,graph2d30,graph2d31,graph2d32,graph2d33,graph2d34,graph2d35,graph2d36,graph2d37,graph2d38,graph2d39,graph2d40;

	var slider=document.getElementById("slide");
	var container=document.getElementById("box");
        var tbox=document.getElementById("list");
	var tv=document.getElementById("tval");

	var garr=[graph2d1,graph2d2,graph2d3,graph2d4,graph2d5,graph2d6,graph2d7,graph2d8,graph2d9,graph2d10,graph2d11,graph2d12,graph2d13,graph2d14,
        graph2d15,graph2d16,graph2d17,graph2d18,graph2d19,graph2d20,graph2d21,graph2d22,graph2d23,graph2d24,graph2d25,graph2d26,graph2d27,graph2d28
	,graph2d29,graph2d30,graph2d31,graph2d32,graph2d33,graph2d34,graph2d35,graph2d36,graph2d37,graph2d38,graph2d39,graph2d40];

slider.innerHTML=('<img src='+jsond[0].image+'><br>'+'Name:'+jsond[0].name+'<br>Roll No:'+jsond[0].Roll_No+(garr[0]=new vis.Graph2d(container,this.jsond[0].marks,jsopt,groups)));

	var j=0;
	function next(){
			m=0;
			tbox.innerHTML='';
			if(j==(garr.length-1))
			{
				j=-1;
			}
			j++;
				container.innerHTML='';
slider.innerHTML=('<img src='+jsond[j].image+'><br>'+'Name:'+jsond[j].name+"<br>Roll No:"+jsond[j].Roll_No+(garr[j]=new vis.Graph2d(container,this.jsond[j].marks,jsopt,groups)));
				 list1(m);		
			}
	function prev(){
			m=0;
	              tbox.innerHTML='';

			if(j==0)
			{
				j=garr.length;		
			}
			j--;
				container.innerHTML='';

slider.innerHTML=('<img src='+jsond[j].image+'><br>'+'Name:'+jsond[j].name+"<br>Roll No:"+jsond[j].Roll_No+(garr[j]=new vis.Graph2d(container,this.jsond[j].marks,jsopt,groups)));

				list1(m);
		      }

document.onkeydown=button;

function button(e)
{
	e = e || window.event;
	if(e.keyCode == '39')
	{
		next();
	}
	else if(e.keyCode == '37')
	{
		prev();
	}
	if(e.keyCode == '38')
        {
                next();
        }
        else if(e.keyCode == '40')
        {
                prev();
        }
	else if(e.keyCode == '13')	
	{	
		update();	
	}
}

function display(j)
{		
		container.innerHTML='';
slider.innerHTML=('<img src='+jsond[j].image+'><br>'+'Name:'+jsond[j].name+"<br>Roll No:"+jsond[j].Roll_No+(garr[j]=new vis.Graph2d(container,jsond[j].marks,jsopt,groups)));

}

var k;
function byno()
{
	m=0;
	tbox.innerHTML='';
	var x=document.getElementById("tval").value;
	tv.value='';
	for(k=0;k<data.length;k++)
	{
		if(x==data[k].Roll_No)
		{
			display(k);
			break;
		}
		
	}
	j=k;
list1(m);
	return j;
}

var gid=["gid0","gid1","gid2","gid3","gid4","gid5","gid6","gid7"];
m=0;
function list1(m)
{
	len=(jsond[j].marks.length)-1;
	len=len/2;
			f=0;
			while(m<len)
			{
				var div = document.createElement('div');
                          div.innerHTML=jsond[j].marks[m].label.content+' : <input type="text" size="3" id="'+gid[m]+'" value='+jsond[j].marks[m].y+' /><br><br>';
				tbox.appendChild(div);
				m++;		
			}
		
}

if(j==0)
{
 m=0;	
list1(m);
}

function update()
{
	var i=0,t=0;
	len=(jsond[j].marks.length)-1;
	len=(len/2);
	m=len;
	for(i=0;i<len;i++)
	{
		val=document.getElementById(gid[i]).value;
		if(val>100)
		{
			alert("Enter Marks Below 100!");
			return;
		}
		if(val>0)
		{
			
			jsond[j].marks[t].y=val;
			jsond[j].marks[t].label.yOffset=(val)*3.43;
			newlbl[i].content=val;
			jsond[j].marks[len+t].label=newlbl[i];
		
		}
		t++;
	}
	list1(m);
	display(j);
}

