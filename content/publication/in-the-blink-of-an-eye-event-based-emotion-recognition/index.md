---
title: "In the Blink of an Eye: Event-based Emotion Recognition (SIGGRAPH 2023)"
publication_types:
  - "1"
authors:
  - Haiwei Zhang
  - Jiqing Zhang
  - Bo Dong
  - Pieter peers
  - Wenwei Wu
  - Xiaopeng Wei
  - Felix Heide
  - Xin Yang
author_notes:
  - Equal Contribution
  - Equal Contribution
publication: SIGGRAPH 2023
abstract: >-
  We introduce a wearable single-eye emotion recognition device and a real-time
  approach to recognizing emotions from partial observations of an emotion that
  is robust to changes in lighting

  conditions. At the heart of our method is a bio-inspired event-based camera setup and a newly designed lightweight Spiking Eye Emotion Network (SEEN). Compared to conventional cameras, event-based cameras offer a higher dynamic range (up to 140 dB vs. 80dB) and a higher temporal resolution (in the order of 𝜈 s vs. 10s of

  𝑛 s). Thus, the captured events can encode rich temporal cues under challenging lighting conditions. However, these events lack texture information, posing problems in decoding temporal information effectively. SEEN tackles this issue from two different perspectives. First, we adopt convolutional spiking layers to take advantage of

  the spiking neural network’s ability to decode pertinent temporal information. Second, SEEN learns to extract essential spatial cues from corresponding intensity frames and leverages a novel weight-copy scheme to convey spatial attention to the convolutional spiking layers during training and inference. We extensively validate and demonstrate the effectiveness of our approach on a specially collected Single-eye Event-based Emotion (SEE) dataset. To the best of our knowledge, our method is the first eye-based emotion recognition method that leverages event-based cameras and spiking neural networks.
draft: false
featured: false
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
date: 2023-05-09T13:42:11.398Z
---
