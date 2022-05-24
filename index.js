const mainUrl = "https://wsu.ac.kr/";
const infoUrl = "https://info.wsu.ac.kr/index_new.jsp";
const lmsUrl = "https://smart.wsu.ac.kr/";
const scheUrl = "https://wsu.ac.kr/page/index.jsp?code=campus0101";
const bioUrl = "https://lms.biocoss.ac.kr/";

document.getElementById("main").addEventListener("click", () => newTab(mainUrl), false);
document.getElementById("info").addEventListener("click", () => newTab(infoUrl), false);
document.getElementById("lms").addEventListener("click", () => newTab(lmsUrl), false);
document.getElementById("sche").addEventListener("click", () => newTab(scheUrl), false);
document.getElementById("bio").addEventListener("click", () => newTab(bioUrl), false);

function newTab(url)
{
  whale.tabs.create({ url });
}