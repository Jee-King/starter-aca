---
title: "Localization-Anchored Instance Discrimination for Domain Adaptive Person Search (AAAI 2026)"
publication_types:
  - "1"
authors:
  - Linfeng Qi
  - Huibing Wang
  - Jinjia Peng
  - Jiqing Zhang
author_notes:
  - 
  - 
publication: AAAI 2026
abstract: >-
  Domain-adaptive person search (DAPS) aims to transfer pedestrian detection and re-identification capabilities from a labeled source domain to an unlabeled target domain, yet faces critical challenges from domain shift: semantic confusion among overlapping instances, over-reliance on shallow features for look-alike targets, and poor discriminability of small-scale instances. To address these issues, we propose the Localization-Anchored Instance Discrimination (LAID) framework, which leverages spatial relationships between bounding boxes as auxiliary signals to enhance instance identity learning. LAID integrates three complementary strategies: 1) Cost-Aware Instance Matching (CAIM) uses IoUbased global optimal assignment to align current detections with historical identities, reducing overlap-induced misassociations; 2) Dual-Scope Contrastive Learning (DSCL) combines spatial separation constraints (for geometrically distant pairs) with global contrastive learning, prompting the model to learn deep discriminative features beyond superficial similarities; 3) Task-Sensitivity Alignment (TSA) aligns confidence distributions of detection and ReID heads via KL divergence, ensuring consistent pseudo-label generation. Extensive experiments on CUHK-SYSU and PRW atasets demonstrate that LAID outperforms state-of-the-art DAPS methods, validating its effectiveness in mitigating domain shift and narrowing the performance gap between supervised and domain adaptive person search.
featured: false
url_pdf:  https://ojs.aaai.org/index.php/AAAI/issue/view/691
url_code:    https://github.com/whbdmu/LAID
url_dataset: 
url_supp: 
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2026-04-01T13:42:11.398Z
---
