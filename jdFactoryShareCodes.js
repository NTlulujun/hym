/*
东东工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PLANT_BEAN_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  'dc4e33f90b7c4079ae820913a521e657@17f6b08b50aa46e695057a8a13eb2fb0@36c883a467144d44a75504bcb5886280@82db135fc0da4f80ad4609015e1bcfda',
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号一的好友shareCode,不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号二的好友shareCode，不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号二的好友shareCode，不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号二的好友shareCode，不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号二的好友shareCode，不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号一的好友shareCode,不同好友中间用@符号隔开
  'P04z54XCjVWnYaS5mlRWjmmlTsA@P04z54XCjVWnYaS5m9cZ2b5iXkcw5iRj8NvNdQ@P04z54XCjVWnYaS5m9cZ2f43HVLwafQDX2_87k@P04z54XCjVWnYaS5m9cZ2f93SoekdZESEmxoPM@P04z54XCjVWnYaS5m9cZ2b71H5CkXdG2iHu_ZQ',//账号二的好友shareCode，不同好友中间用@符号隔开
  
]
// 判断github action里面是否有东东工厂互助码
if (process.env.DDFACTORY_SHARECODES) {
  if (process.env.DDFACTORY_SHARECODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DDFACTORY_SHARECODES.split('&');
  } else if (process.env.DDFACTORY_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DDFACTORY_SHARECODES.split('\n');
  } else {
    shareCodes = process.env.DDFACTORY_SHARECODES.split();
  }
} else if (process.env.DDFACTORY_SHARECODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
