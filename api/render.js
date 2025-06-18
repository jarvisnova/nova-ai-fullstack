export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Received scene render request:", req.body);

    res.status(200).json({
      success: true,
      videoUrl: "https://cdn.pixabay.com/video/2022/11/28/140168-776410511_large.mp4"
    });
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
