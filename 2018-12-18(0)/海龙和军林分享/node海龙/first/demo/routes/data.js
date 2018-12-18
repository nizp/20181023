var express = require("express");
var router = express.Router();
var {
  parse
} = require("querystring");
var {
  parse: urlParse
} = require("url");
// get home page
data = [{
  id: 0,
  title: "两数之和",
  des: "给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。示例:给定 nums = [2, 7, 11, 15] target = 9;因为 nums[0] + nums[1] = 2 + 7 = 9;所以返回 [0, 1]"
}, {
  id: 1,
  title: "反转整数",
  des: "给定一个 32 位有符号整数，将整数中的数字进行反转。示例 1:输入——123;输出——321;示例 2:输入——-123;输出——-321;示例 3:输入——120;输出——21;注意:假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。"
}, {
  id: 2,
  title: "最大子序和",
  des: "给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。示例:输入: [-2,1,-3,4,-1,2,1,-5,4],输出——6;解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。进阶:如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。"
}];
router.get("/", function (req, res, next) {
  const txt = parse(urlParse(req.url).query).happy;

  for (let val of data) {
    if (val.id + 1 == txt) return res.send('{"name":"Lyu"}');
  }
  return res.send("无结果");
});

module.exports = router;