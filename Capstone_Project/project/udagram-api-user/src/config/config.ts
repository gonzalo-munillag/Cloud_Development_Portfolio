export const config = {
  'username': process.env.POSTGRESS_USERNAME,
  'password': process.env.POSTGRESS_PASSWORD,
  'database': process.env.POSTGRESS_DB,
  'host': process.env.POSTGRESS_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
