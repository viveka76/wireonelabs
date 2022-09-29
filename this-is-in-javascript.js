function increase(curr,interval){
	hour=parseInt(curr.slice(0,2))
	minute=parseInt(curr.slice(2,4))
	second=parseInt(curr.slice(4))
	hour_=parseInt(interval.slice(0,2))
	minute_=parseInt(interval.slice(2,4))
	second_=parseInt(interval.slice(4))
	hour=hour+hour_
	minute=minute+minute_
	second=second+second_
	if second>59{
		minute=minute+1
		second=second%60
	}
	if minute>59{
		hour=hour+1
		minute=minute%60
	}
	hour=hour%24
	if hour<10{
		hour='0'+hour
	}
	hour=''+hour
	if minute<10{
		minute='0'+minute
	}
	minute=''+minute
	if second<10{
		second='0'+second
	}
	second = ''+second
	
	return hour+minute+second
}

function irrigation(plots,motors,starttime, endtime,motorruntime,irrigationcycle){
	plotqueue=[]
	motorsqueue=[]
	for (let i=1;i<plots.length+1;i++){
		value=['D'+i,starttime]
		plotqueue.push(value)
	}
	for (let i=1;i<motors.length+1;i++){
		value=['M'+i,starttime]
		motorsqueue.push(value)
	}
	curr=starttime
	while(plotqueue && motorsqueue){
		if curr>=plotqueue[0][-1] && curr>=motorsqueue[0][-1]{
			plot,plottime=plotqueue.shift()
			motor,motortime=motorsqueue.shift()
			#print
			plotqueue.push(plot,increase(curr,increase(curr,irrigationcycle)))
			motorsqueue.append((motor,increase(curr,motorruntime)))
		curr=increase(curr,'000001')
		if curr>=endtime{
			return
		}
		}
	}
	
}