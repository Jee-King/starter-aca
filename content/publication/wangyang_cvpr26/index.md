---
title: "SpikeTrack: High-performance and Energy-efficient Event-Based Object Tracking with Spiking Neural Network (CVPR 2026)"
publication_types:
  - "1"
authors:
  - Yang Wang 
  - Jiqing Zhang
  - Chuanyu Sun 
  - Qianhui Liu
  - Huilin Ge
  - Ziqi Wei
  - Xin Yang
author_notes:
  - 
  - Corresponding Author
  - 
  - 
  - 
  - Corresponding Author
  - Corresponding Author
publication: CVPR 2026
abstract: >-
  Event cameras have attracted considerable attention for object tracking due to their microsecond-level temporal resolution and wide dynamic range, yet effectively harnessing spiking neural networks (SNNs) in this domain remains challenging. In this paper, we introduce SpikeTrack, a purely spike-driven framework for single-object tracking that addresses the shortcomings of RGB-base approaches in fast-motion or target appearance change. Central to SpikeTrack is the Multi-Search-sequence-and-Single-Template (MSST) training paradigm, which captures rich temporal dependencies, alongside a Dynamic Integer Leaky Integrate-and-Fire (DI-LIF) neuron that adaptively predicts integer-valued activations based on the input features during training and converts them into spikes during inference. Our design preserves the intrinsic sparsity and fine-grained spatiotemporal acuity of event data, resulting in efficient energy consumption without sacrificing performance. Extensive evaluations on FE108, FELT, and VisEvent demonstrate that SpikeTrack exceeds the performance of state-of-the-art trackers in both accuracy and efficiency. Furthermore, ablation studies validate each module’s contribution, highlighting the practical potential of spike-driven architectures for future vision applications.
draft: false
featured: false
url_pdf:   
url_code: 
url_video:  
url_supp: 
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2026-04-01T13:48:11.398Z
---
