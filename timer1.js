const args = process.argv.slice(2);

const timer = function (args) {
  for (let arg of args) {

    if (args.length === 0) {
      return;
    }

    if (arg < 0 || isNaN(arg)) {
      console.log('skip');
    }
  
    else {
        setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`beeping at ${arg} seconds`);
      }, (arg * 1000));
    }
  }
}

timer(args);