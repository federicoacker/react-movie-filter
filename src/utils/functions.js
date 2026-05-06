function sanifyMovie(movieObject){
    let {title} = movieObject;
    const disallowedChars = [
        "\\", 
        "/",
        "'", 
        '"', 
        "*", 
        "+", 
        "-", 
        ".", 
        ";", 
        "|", 
        "(", 
        ")", 
        "[", 
        "]", 
        "{", 
        "}",
        "@",
        "%",
        "=",
        "`",
        "<",
        ">"
    ];

    if(title.length <= 1){
        return [false, null];
    }
    else{
        for(const char of title){
            if(disallowedChars.includes(char)){
                return [false, null]
            }
        }
    }
    
    let sanifiedTitle = title.split("");
    sanifiedTitle[0] = sanifiedTitle[0].toUpperCase();
    sanifiedTitle = sanifiedTitle.join("");
    return [true, {
        ...movieObject,
        title:sanifiedTitle
    }]
}

export {
    sanifyMovie
}