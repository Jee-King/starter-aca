---
title: Spiking Transformers for Event-based Single Object Tracking （CVPR 2022）
publication_types:
  - "1"
authors:
  - Jiqing Zhang

publication: IEEE Conference on Computer Vision and Pattern Recognition
publication_short: "*CVPR*"
abstract: Event-based cameras bring a unique capability to tracking, being able to function in challenging real-world conditions as a direct result of their high temporal resolution and high dynamic range. These imagers capture events asynchronously that encode rich temporal and spatial information. However, effectively extracting this information from events remains an open challenge. In this work, we propose a spiking transformer network, STNet, for single object tracking. STNet dynamically extracts and fuses information from both temporal and spatial domains. In particular, the proposed architecture features a transformer module to provide global spatial information and a spiking neural network (SNN) module for extracting temporal cues. The spiking threshold of the SNN module is dynamically adjusted based on the statistical cues of the spatial information, which we find essential in providing robust SNN features. We fuse both feature branches dynamically with a novel cross-domain attention fusion algorithm. Extensive experiments on two event-based datasets, FE240hz and EED, validate that the proposed STNet outperforms existing state-of-the-art methods in both tracking accuracy and speed with a significant margin.
draft: false
featured: false
image:
  filename: feature.jpg
  focal_point: Smart
  preview_only: false
date: 2022-03-07T03:25:13.935Z
url_pdf: 
url_supp:
url_dataset:  
url_code:
url_video:  
---
