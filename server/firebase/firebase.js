var admin = require('firebase-admin');

// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: 'patner-823b4',
    private_key_id: 'daa612cd9c657cbf26fc7b9ce9dacca7bc5e32c5',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDG3px9SOqel/+/\nEiWn+HIpEVswgle6dTzvv8vKs/HMNF+Hdd+m3lyxaaz0GMc8Yj88P+i7YOQSuMUb\nF3fCiCtFVpGlozWncEUufVrjgnQmn5KT1Z9tbp1L0pg/KRl1/NOG42KzU1Y2CnjM\n+uQGWkoumS5ncuj4ay8Sc5aVGVfyZwjgJNTZkalgyblWWiVi3UeYOjnFwZeQrjQ1\nCgl3mLUibDWiGHp/L7GVrnx79oB0il9mYZHwuRFm0EIokXFMGa6cV8tBkTEDYdXB\nj33t32kfjaKr6VWLWVTDB5/FHSiSs+Q6yl7E0bYdpO8uHQBB0Q9l+F2M0jhxRXVB\n17RAOZtRAgMBAAECggEAO9s187mWMHzkc5CVN+zeA4FfVobsu8jcufaa8pxdm05q\nMF3onpOQB7AcZ+3rTb/uc4Zy2K8thnsJjIFwQON2TqzjMp0goZB3qin9yLtzlUpz\nNj7WePwRqQguXdhTewFJc3COPRZIvQRC3sNnDYhwinz9jBJ4j4jHRsD2olLZ9zHG\nugagPXcrExqJ4ttzKaMqDGZc5cxbaFtHjAuYAgNqsS5lgL/Icesca1YtjhK3ukis\nQH37/9spv06h+ILBk3vtEKE3LkmtnBYhUZdDf3Q5VAmm33wB/hw0jQ3xYtBq2HpM\nyD7ZoVstux47VpbaBK7UUdEMor/E4BYXwJPEr7KBPwKBgQDyk5oiIL3LIT0jElvD\nWOOBrF740zM36ZQDBGTn7qOjhll9TQU61418cBFZwMO+zgJkVbHaYXAZTLgIP6Go\nJnv+YkWlw9g4nI1VyTVDPP7c9nweLu8jq7+FFCQZks6gy9fMair8jnCDc6VRufNF\nRWokqRrSSzxvooWTRwvKFRbC+wKBgQDR39htWkvPvDPctlOcLGBeiWfSiLQIksAM\nHsqztMq5mORwCtLZQuPkWi/a0pt1xh1fF4kovM2/O2/e0IjrhDGruqyJY+KKY6C7\nO1uBpwlucZCCd+Q1zeVmd1RZrZ73exrC0hMNg7ZaTUiDhPD2c4YSJoJQmqsNzsT4\n5ZcLfyxpIwKBgBYr03ynDXHReesItIZoS3MAtDV96EKGANc9wZNJRn+dufQv4/h6\n1x22iH9xlPKNlb5h7r2NBlfpoTBv0HC0A8U+ais6eTrDZE+g8lNQ8eJ0TOfdVlIm\nUnzxWFNWDbi4qOKwGXm38ySwnz2XB1sfexIauq7Z3Y4+hoLtjXBM+SWdAoGBAIXi\nlt6ry9Ep7qvOZGgspw2n+mOEcdVGSN1yhz09CFZ+Ary3KusOkPML1Zty31mymOog\nyY8DYv2rnSI3RiF4o3c6DvdWkR5XkCHhK+758DpUmCui8CKixsUnOtg6uj6Gefvu\np9jnPV0+EBRWqqGN8OmDR37ELHsSfPWLAWCEMIChAoGBAKLAC8EeOlBuq8NvEoJp\nN7FqsNaFk6nF6C239z1BgGa8UAu/I2Jj1FsJsANpaoH0XFTtCPbfjh/m7wMEnir/\nyLNkLmKlUYRilVkgMFGjUAYWFkIaU242JYWD/arPCUSXOibfnreof21Vg6fIYMT+\nPtbScAe1co9vLdPfF0pt5Bus\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-q75zr@patner-823b4.iam.gserviceaccount.com',
    client_id: '105978358420710950916',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q75zr%40patner-823b4.iam.gserviceaccount.com',
  }),
});

exports.autheticateToken = async (token) => {
  return await admin.auth().verifyIdToken(token);
};

exports.getRegisterData = async (token) => {
  let user = await admin.auth().verifyIdToken(token);
  if (!user) return;
  return {
    email: user.email,
    uid: user.uid,
  };
};
