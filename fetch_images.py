import urllib.request
import re

url = "https://html.duckduckgo.com/html/?q=%E4%B8%80%E5%B1%B1%E6%B2%90%E9%9C%B2%E7%87%9F%E5%8D%80"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # look for external images in the search results
    img_urls = re.findall(r'src="(//external-content\.duckduckgo\.com/[^"]+)"', html)
    for i, u in enumerate(set(img_urls)):
        if i >= 4: break
        print("https:" + u)
except Exception as e:
    print(str(e))
