const mongoose = require('mongoose')
const express = require('express')
const crud = require('../utils/crud')

//MODEL
const storySchema = new mongoose.Schema({
    title: {type: String, required: [true, "לספר חייב להיות שם"]},
    publishYear: {type: Number, required: [true, "לספר חייבת להיות שנת הוצאה"]},
    author: {type: String, default: "שילת אביה דהן"},
    zenere: {type: String, default: "פנטזיה"},
    price: {type: Number, required: [true, "לספר חייב להיות מחיר"]},
    cover: {type: String, required: [true, "לספר חייב להיות כריכה"]},
    summary: {type: String, required: [true, "לספר חייב להיות תקציר"]},
    aboutStory: String,
    prologe: String,
    payBtn: String,
    series: String,
    seriesNum: String,
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

// Define a virtual field "comments" to link related Comment documents to each Story.
storySchema.virtual("comments",{
    ref: "Comment",
    foreignField: "story",
    localField: "_id"
})

storySchema.pre("findOne", function(next){
    this.populate({path: "comments", select: "-story -__v"}) 
    next()
})

storySchema.pre("save", function(next){
    if (this.payBtn && typeof this.payBtn === "string"){
        const replaceSearch = 'src="https://www.paypalobjects.com/he_IL/i/btn/btn_cart_LG.gif"'
        const replaceTo = 'src="https://i.ibb.co/4P5LKnk/ei-1704014855402-removebg-preview.png" class= "addToCartImg"'
        let htmlString = this.payBtn
        this.payBtn = htmlString.replace(replaceSearch, replaceTo)
    }
    next()
})



storySchema.pre("findOneAndUpdate", function(next) {
    const replaceSearch = 'src="https://www.paypalobjects.com/he_IL/i/btn/btn_cart_LG.gif"';
    const replaceTo = 'src="https://i.ibb.co/4P5LKnk/ei-1704014855402-removebg-preview.png" class="addToCartImg"';

    if (this._update.payBtn) {
        console.log("made it");
        let htmlString = this._update.payBtn;
        this._update.payBtn = htmlString.replace(replaceSearch, replaceTo);

        this.setUpdate({ payBtn: this._update.payBtn });
    }

    console.log(this._update.payBtn); 

    next();
});

const Story = new mongoose.model("Story", storySchema)

//HANDLERS
const getStories = crud.getAll(Story)
const createStory = crud.createOne(Story)
const showStory = crud.getOne(Story, "story")
const updateStory = crud.updateOne(Story)
const deleteStory = crud.deleteOne(Story)




//ROUTES - main: /api/stories
const storiesRouter = express.Router()

storiesRouter.get("/", getStories)
storiesRouter.get("/:id", showStory)


//restricted routes
storiesRouter.use(crud.restriction)
storiesRouter.post("/" , createStory)
storiesRouter.route("/:id").patch(updateStory).delete(deleteStory)

module.exports = storiesRouter