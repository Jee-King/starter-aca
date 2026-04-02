---
title: "AlignTrack: Top-Down Spatiotemporal Resolution Alignment for RGB-Event Visual Tracking (AAAI 2026)"
publication_types:
  - "1"
authors:
  - Chuanyu Sun
  - Jiqing Zhang
  - Yang Wang
  - Yuanchen Wang
  - Yutong Jiang
  - Baocai Yin
  - Xin Yang
author_notes:
  - Equal Contribution
  - Equal Contribution
publication: AAAI 2026
abstract: >-
  Most existing RGB-Event trackers rely on strictly aligned datasets, overlooking the asynchronous spatio-temporal resolutions common in real-world scenarios. This methodological limitation impedes effective RGB-Event feature alignment and ultimately degrades tracking performance. To overcome this limitation, we propose AlignTrack, a novel tracking framework built upon a Top-Down Alignment (TDA) strategy inspired by the human visual system. Our TDA framework follows an encode-decode-align paradigm: it first encodes multimodal features to generate target-related priors, which are then progressively decoded to guide a subsequent feature alignment pass. Within this framework, we introduce two key innovations: (1) a Cross-Prior Attention (CPA) module that effectively generates and integrates cross-modal priors, and (2) a Cross-Modal Semantic Alignment (CSA) loss that maximizes mutual information to enforce semantic consistency between modalities. Extensive experiments show that AlignTrack achieves state-of-the-art performance on four challenging RGB-Event tracking benchmarks, demonstrating its robustness in both aligned and unaligned scenarios. Ablation studies further validate the significant contribution of each proposed component.
featured: false
url_pdf:  https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=57iWrxUAAAAJ&sortby=pubdate&citation_for_view=57iWrxUAAAAJ:Wp0gIr-vW9MC
url_code:  github.com/scy0712/AlignTrack
url_dataset: 
url_video:  
url_supp: 
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2024-07-09T13:42:11.398Z
---
