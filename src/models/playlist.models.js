import mongoose, {Schema} from "mongoose"

const playlistSchema= new Schema({
    name: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Playlist = mongoose.model('Playlist', playlistSchema)