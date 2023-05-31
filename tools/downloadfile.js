const downloadfiles = src => {
  var src = src
  var iframe = document.createElement("iframe")
  iframe.style.display = "none"
  iframe.src = "javascript: '<script>location.href=\"" + src + "\"</script>'"
  document.getElementsByTagName("body")[0].appendChild(iframe)
}
export default downloadfiles
