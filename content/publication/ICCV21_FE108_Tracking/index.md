---
title: Object Tracking by Jointly Exploiting Frame and Event Domain （ICCV 2021）
publication_types:
  - "1"
authors:
  - Jiqing Zhang
  - Xin Yang
  - Yingkai Fu
  - Xiaopeng Wei
  - Baocai Yin
  - Bo Dong
publication: IEEE International Conference on Computer Vision
publication_short: "*CVPR*"
abstract: Event-based cameras bring a unique capability to tracking, being able to function in challenging real-world conditions as a direct result of their high temporal resolution and high dynamic range. These imagers capture events asynchronously that encode rich temporal and spatial information. However, effectively extracting this information from events remains an open challenge. In this work, we propose a spiking transformer network, STNet, for single object tracking. STNet dynamically extracts and fuses information from both temporal and spatial domains. In particular, the proposed architecture features a transformer module to provide global spatial information and a spiking neural network (SNN) module for extracting temporal cues. The spiking threshold of the SNN module is dynamically adjusted based on the statistical cues of the spatial information, which we find essential in providing robust SNN features. We fuse both feature branches dynamically with a novel cross-domain attention fusion algorithm. Extensive experiments on two event-based datasets, FE240hz and EED, validate that the proposed STNet outperforms existing state-of-the-art methods in both tracking accuracy and speed with a significant margin.
draft: false
featured: false
image:
  filename: featured.jpg
  focal_point: Smart
  preview_only: false
date: 2021-07-23T03:25:13.935Z
url_pdf: https://arxiv.org/abs/2109.09052
url_supp: https://arxiv.org/abs/2109.09052
url_dataset:  "dataset"
url_code: https://github.com/Jee-King/ICCV2021_Event_Frame_Tracking
url_video:  https://youtu.be/EeMRO8XVv04
---

![](fenge.png)

### **Detailed architectures of the proposed components**

![](architecture.jpg)

### **Statistics of FE108 dataset**

![](dataset_analy1.jpg)

![](dataset_analy2.jpg)

### **Results on FE108 dataset**

![](result-fe1081.jpg)

![](result-fe108.jpg)

### **Results on EED dataset**

![](result-eed1.jpg)

![](result-eed.jpg)

### **Ablation studies**

![](ablation.jpg)


{{% callout note %}}
You can also view related project information from Professor [Yang's homepage](https://xinyangdut.github.io/).
{{% /callout %}}
