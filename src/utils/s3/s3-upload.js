import S3FileUpload from 'react-s3';

const config = {
  bucketName: 'ebenkb',
  dirName: 'devmech', /* optional */
  region: 'us-east-2',
  accessKeyId: 'AKIAQIYUIR3X4CTSAMPH',
  secretAccessKey: '6PxAJKADeER2/PGdW6bis30WmgXftGOu58u2Cklf',
  // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

const uploadToS3 = (file) => {
  return new Promise((resolve, reject) => {
    S3FileUpload
    .uploadFile(file, config)
    .then(data => resolve(data))
    .catch(err =>reject(err))
  })
} 

export default uploadToS3;
