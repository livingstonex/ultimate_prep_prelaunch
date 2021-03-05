exports.handler = async function(event, context, callback){
    // return {
    //     statusCode: 200, 
    //     body: JSON.stringify({message: "Fiest Test Page"})
    // }

    // callback(null, {statusCode: 200, body: JSON.stringify({msg: "Helooooo"})})
    console.log(event.queryStringParameters)
}