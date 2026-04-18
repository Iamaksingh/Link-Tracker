import mongoose from "mongoose";

const clickSchema = new mongoose.Schema({   //create a click event schema to store the click events for each link
	linkId: {
		type: mongoose.Schema.Types.ObjectId,  //the id of the link that was clicked
		ref: "Link",  //reference to the link that was clicked
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
	referrer: {   //the source of the click, e.g. "google", "facebook", "twitter", "direct"
		type: String,
		default: "direct",
	},
	device: {  //device on which the click occured
		type: String,
		enum: ["mobile", "desktop", "tablet"],
	},
});

export default mongoose.model("ClickEvent", clickSchema);