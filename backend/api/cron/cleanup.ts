import cleanUp from '../../src/cron/cleanup'

export default async function handler(req, res) {
    try {
        await cleanUp();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({
            message: "Try again later",
            error: error,
        })
    }
}