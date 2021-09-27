# Network-Proxy-Rules
This repo introduces how [@dykderrick](https://github.com/dykderrick) configures the network of his multiple electronic equipments. It should only be used in mainland China. (**Update**: Now my girlfriend has moved to the United States. So I also built a v2ray server in China to unblock websites in China).

## Basics
### Why we need to unblock websites in China?
GFW somehow gives the ruler of China a more convenient way to manipulate the thoughts of Chinese citizens. I agree with the idea. Who doesn't want convenience?

However, those blockings are a nightmare for students. To be honest, in my first two years of college, I have no idea on how to appropriate academic researches, or even how to use search engine to get answers for coding issues (Literally I can use Chinese Internet like CSDN to get answers but usually I cannot get the principles and reasons behind the issues). Not to mention some of the coding issues are caused by GFW. For example, if we use Android Studio to build an Android app, we would use Gradle to manage packages. But thanks to the block of Google in China, packages located on Google server cannot be downloaded.

## What if I am not familiar with network configuration?
Please use [**ExpressVPN**](https://www.expressvpn.com).

## My Own Proxy Provider
I use [**FastLink**](https://fastlink.ws/auth/register?code=qxCd). This platform offers IPLC (Explanation: https://youtu.be/G1eztAwa6Bw) and AnyCast.

I also have a [DigitalOcean](https://digitalocean.com) linux server that runs basic v2ray service. This server could provide me with an IPv6 address so that I can visit [BYRBT](https://byr.pt) directly from my home where no IPv6 address is provided by my local ISP.

## Software
![Image Not Found](images/Rules-Outline-on-Surge.png)
**Surge** for Mac and for iOS is highly recommended. Official website https://nssurge.com and Docs at https://manual.nssurge.com/book/understanding-surge/cn.
#### What if I do not have a Mac?
Buy it.

## Rules and Policy Groups
* **Unfinished**.