# Network-Proxy-Rules
This repo introduces how [@dykderrick](https://github.com/dykderrick) configures the network of his multiple electronic pieces of equipment. It should only be used in mainland China. (**Update**: Now my girlfriend has moved to the United States. So I also built a v2ray server in China to unblock websites in China).

## Basics
### Why do we need to unblock websites in China?
GFW somehow gives the ruler of China a more convenient way to manipulate the thoughts of Chinese netizens. I agree with the idea. Who doesn't want convenience?

However, those blockings are a nightmare for students. To be honest, in my first two years of college, I have no idea how to do appropriate academic researches, or even how to use a search engine to get answers for coding issues (Literally I can use Chinese developer community like CSDN to get answers. But in most cases, I cannot get the principles or reasons behind the issues). Not to mention some of the coding issues are caused by the GFW itself. For example, if we use Android Studio to build an Android app, we would use Gradle to manage packages. But thanks to the block of Google in China, packages located on the Google server cannot be downloaded to the app bundle. Even if the deployment environment uses HTTP proxy, some operating system calls fail to obey such proxy rules (**See Also:** [Surge Manual](https://manual.nssurge.com/book/understanding-surge/en)). In this case, some system environment configurations will fail. For example, if a python script imports a specific module your local python environment doesn't have, probably you'd use a command like `pip install foo`, which actually calls download service at PyPI. If no proxy is enabled, this download process could become extremely slow. No productive at all.

Another reason to unblock websites is to learn English. That is ironic, right? Actually I didn't like to use YouTube until I started preparing for TOEFL and GRE in my third year of college. At that time, I realized I was literally ruined by the K-12 English education in China. Gao Kao could never give me the correct method to learn a specific language at all. In retrospect, how could you like to learn English if all of your knowledge about English is filled with choosing something from four choices? Not to mention the practice of speaking. No opportunities at all. As a result, I started to follow some YouTubers, Podcast creators, and Netflix TV series to re-learn English. This period of time made me realize that living in an English environment is the correct way to learn this language, instead of taking one or two English exams per day.

## What if I am not interested in network configuration?
Please use [**ExpressVPN**](https://www.expressvpn.com).

## My Proxy Provider
I use https://sakura.camdvr.org/. This platform promises to provide local content (local IP addresses). Netflix non-original support.

I also have a [DigitalOcean](https://digitalocean.com) Linux server that runs a basic v2ray service. This server could provide me with an IPv6 address so that I can visit [BYRBT](https://byr.pt) directly from my home, where no IPv6 address is provided by my local ISP.

## Software
![Image Not Found](images/Rules-Outline-on-Surge.png)
**Surge** for Mac and for iOS is highly recommended. Official website https://nssurge.com and Docs at https://manual.nssurge.com/book/understanding-surge/en.
#### What if I do not have a Mac?
Buy it.

## Rules and Policy Groups
* **Unfinished**.