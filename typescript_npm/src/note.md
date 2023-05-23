TypeScript toturial 

    type of TS : 
        - any
        - unknown
        - never
        - enum : 
            + add const before enum then compiler translate to javascript will set only one value of name varable  
        - tuple

    advance type :
        - Type aliases :
                        + summarize and create and name for a new type to ez use
                        + complicated to simple
                        + like object but more convinient and succinct
        - Unions and intersections :
                                    + Unions type is mutiple-typoe like : distance : number | string
                                    + we use narrowing type to choose type (limit type of unions) to use 
                                    example distance : number | string 
                                    if(typeof distance === "number")
                                    if(typeof distance === "string")
                                    + Intersection type is summerize styles of types from   different types to create a new object | new type  
        - Type narrowing
        - Nullable types 
        - Unknown type
        - Never type

    fetch API with typescript