export const uploadImageToCloudinary = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageFile: any,
  type?: "image" | "video"
) => {
  let url: string;
  if (type && type == "video") {
    url = "https://api.cloudinary.com/v1_1/dzaoju6lr/video/upload";
  } else {
    url = "https://api.cloudinary.com/v1_1/dzaoju6lr/image/upload";
  }

  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "ml_default");

  try {
    // 9d43f0bc549b13f9aed6c48d798762
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return ""; // Handle the error appropriately
  }
};
