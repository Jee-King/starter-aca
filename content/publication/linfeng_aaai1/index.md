---
title: "Instance-Guided Scene Adaptation for Unsupervised Person Search (AAAI 2026)"
publication_types:
  - "1"
authors:
  - Linfeng Qi
  - Huibing Wang
  - Jinjia Peng
  - Xianping Fu
  - Jiqing Zhang
author_notes:
  - 
  - 
publication: AAAI 2026
abstract: >-
  Unsupervised Domain Adaptation (UDA) is a challenging task in person search. It adapts a well-trained model from a labeled source domain to an unlabeled target domain for privacy and efficiency. Currently, most of the state-of-the-art UDA person search methods adopt multi-scale feature alignment techniques to learn domain-invariant representations. However, person search is a multi-granularity task, and such an indiscriminate method of bridging the differences between domains misleads the identity learning process, which significantly limits the model’s performance. In this paper, we propose an Instance-Guided Scene Adaptation (IGSA) framework by eradicating scene disparities and focusing the tasks on instances, effectively eliminating the contradiction between person search and domain adaptation. In IGSA, a Scene-Aware Bidirectional Filter (SABF) is designed to divide the image features into background and foreground to perform idirectional modulations, thereby achieving simultaneous scene elimination and instance enhancement. To further improve the reliability of identity learning, we also propose an Instance Consistency Contrastive Learning (ICCL) method. By performing cross-epoch updates on the instance level memory bank and renitializing the cluster-level memory bank, the problem of inconsistent training across epochs caused by instance identity drift can be alleviated. Through the above designs, our method can achieve state-of-the-art performance on two benchmark datasets, with 82.1% mAP and 83.8% top-1 on the CUHK-SYSU dataset and 41.1% mAP and 82.3% top-1 on the PRW dataset, which is even better than some supervised methods.
featured: false
url_pdf:  https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=57iWrxUAAAAJ&sortby=pubdate&citation_for_view=57iWrxUAAAAJ:9ZlFYXVOiuMC
url_code:   https://github.com/whbdmu/IGSA
url_dataset: 
url_supp: 
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2026-04-01T13:42:11.398Z
---
