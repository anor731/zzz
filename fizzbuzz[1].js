let x=( i=0 )=> {
        process.stdout.write((i%3==0)?((i%5==0)?'Fizzbuzz':'Fizz'):((i%5==0)?'Buzz':'')+'\n');
        x( ++i );
};  x()
