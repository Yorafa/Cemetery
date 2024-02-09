export type People = {
    id: string,
    name: {
        type: String,
        required: true,
    },
    timeline: {
        birth: {
            type: Date,
            required: true,
        },
        death: {
            type: Date,
            required: true,
        },
    },
    epitaph: {
        type: String,
        required: true,
    },
}