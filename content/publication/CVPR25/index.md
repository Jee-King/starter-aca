---
title: "Exploring Historical Information for RGBE Visual Tracking with Mamba (CVPR 2025)"
publication_types:
  - "1"
authors:
  - Chuanyu Sun
  - Jiqing Zhang
  - Yang Wang 
  - Huilin Ge
  - Qianchen Xia
  - Baocai Yin
  - Xin Yang
author_notes:
  - Equal Contriburion
  - Equal Contriburion
publication: CVPR 2025
abstract: >-
  Combining the advantages of conventional and event cameras for robust visual tracing has drawn extensive interest. However, existing tracking approaches heavily engage
in complex cross-modal fusion modules, leading to higher computational complexity and training challenges. Besides,
these methods generally ignore the effective integration of historical information, which is crucial to grasping the
change in the target’s appearance and motion trends. Given the recent advancements in Mamba’s long-range modeling and linear complexity, we explore its potential in addressing the above issues in RGBE tracking tasks. Specifically, we first propose an efficient fusion module based
on Mamba, which utilizes a simple gate-based interaction scheme to achieve effective modality-selective fusion. This module can be seamlessly integrated into the encoding layer
of prevalent Transformer-based backbones. Moreover, we further present a novel historical decoder that leverages
Mamba’s advanced long sequence modeling to effectively capture the target appearance changes with autoregressive
queries. Extensive experiments show that our proposed approach achieves state-of-the-art performance on multiple
challenging short-term and long-term RGBE benchmarks. Besides, the effectiveness of each key Mamba-based component of our approach is evidenced by our thorough ablation study.Code will be released at: https://github.com/scy0712/MamTrack
url_pdf:   
url_code:  https://github.com/scy0712/MamTrack
url_dataset: 
url_video:  
url_supp: 
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2025-02-10T13:42:11.398Z
---
