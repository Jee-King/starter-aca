---
title: Multi-domain Collaborative Feature Representation for Robust Visual
  Object Tracking （The Visual Computer 2021 (Proc. CGI 2021)）
publication_types:
  - "1"
  - "2"
authors:
  - Jiqing Zhang
  - Kai Zhao
  - Bo Dong
  - Yingkai Fu
  - Yuxin Wang
  - Xin Yang
  - Baocai Yin
publication: The Visual Computer (Proc. CGI)
publication_short: In *TVCJ (Proc. CGI)*
abstract: >-
  Jointly exploiting multiple different yet complementary domain information has
  been proven to be an effective way to perform robust object tracking. This
  paper focuses on effectively representing and utilizing complementary features
  from the frame domain and event domain for boosting object tracking
  performance in challenge scenarios. Specifically, we propose Common Features
  Extractor (CFE) to learn potential common

  representations from the RGB domain and event domain. For learning the unique features of the two domains,

  we utilize a Unique Extractor for Event (UEE) based on Spiking Neural Networks to extract edge cues

  in the event domain which may be missed in RGB in some challenging conditions, and a Unique Extractor

  for RGB (UER) based on Deep Convolutional Neural Networks to extract texture and semantic information

  in RGB domain. Extensive experiments on standard RGB benchmark and real event tracking dataset

  demonstrate the effectiveness of the proposed approach. We show our approach outperforms all compared state-of-the-art tracking algorithms and verify event-based data is a powerful cue for tracking in challenging scenes.
draft: false
featured: false
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2021-06-30T07:10:38.794Z
url_pdf: https://link.springer.com/article/10.1007/s00371-021-02237-9
url_video: https://www.youtube.com/watch?v=NrsXMJYSDDQ&t=4s
---
![](fenge_yezi.png)

### RGB and Corresponding Stacked Event images

![](rgb-event.jpg)

### Results on OTB

![](result1.jpg)

![](result2.jpg)

 ### Results on EED

![](result3.jpg)

 ### Presentation

{{<youtube NrsXMJYSDDQ>}}
 
&nbsp
{{% callout note %}} Using [ESIM](https://github.com/uzh-rpg/rpg_esim) on [GOT-10k](http://got-10k.aitestunion.com/) to generate dataset for training and testing. {{% /callout %}}
