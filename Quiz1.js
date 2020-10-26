function customPrint(n, message) {
    let addnewLineWithMessage = message+'\n';
    console.log(addnewLineWithMessage.repeat(n));
}

customPrint(5, "Hello, World!");

