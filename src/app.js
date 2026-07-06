const express=require('express');
const app=express();


const notes=[]

app.use(express.json())
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"note added successfully"
    })
});
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    if(index>=0 && index<notes.length){
        delete notes[index];
    }
    res.status(200).json({
        message:"note deleted successfully",
        notes:notes
    })
})
app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index;
    const updatedNote=req.body;
    if(index>=0 && index<notes.length){
        notes[index]=updatedNote;
    }
    res.status(200).json({
        message:"note updated successfully",
        notes:notes
    })
})
module.exports=app;