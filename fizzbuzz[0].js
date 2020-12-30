let x=( i=0, e=0 )=> {
        process.stdout.write((i==2)?((e==4)?'Fizzbuzz':'Fizz'):((e==4)?'Buzz':'')+'\n');
        x( (i==2)?0:i+1, (e==4)?0:e+1 );
}; x()
