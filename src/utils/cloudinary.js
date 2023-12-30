import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'product',
    resource_type: 'image', // supports promises as well
    public_id: (req, file) => Date.now(),
  },
});

export const uploadImage = multer({ storage: storage });

// export const uploadImage = async (file) => {
//   try {
//     // console.log('Uploading image to Cloudinary:', img);
//     const result = await cloudinary.uploader.upload(file, {
//       folder: 'product',
//       public_id: Date.now(),
//       resource_type: 'image',
//     });
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
