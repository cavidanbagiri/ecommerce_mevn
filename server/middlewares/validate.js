
const validate = (schema)=>(req, res, next)=>{

    const {error, value} = schema.validate(req.body);

    if(error){
        const errorMessages = error.details?.map(item => item.message).join(', ');
        res.status(500).json({err:errorMessages}); 
        return;
    }
    
    Object.assign(req, value);
    next();

}

module.exports = {
    validate
}