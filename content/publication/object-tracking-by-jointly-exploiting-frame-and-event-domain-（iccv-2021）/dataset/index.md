---
widget: blank

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 10

subtitle:

design:
  columns: '2'
---

## About FE108

The FE108 dataset is captured by a DAVIS346 eventbased camera, which equips a 346x260 pixels dynamic vision sensor (DVS) and an active pixel sensor (APS). It
can simultaneously provide events and aligned grayscale images of a scene. The ground truth bounding boxes of a moving target are provided by the Vicon motion capture
system, which captures motion with a high sampling rate (up to 330Hz) and sub-millimeter precision. During the capturing process, we fix APS’s frame rate to 20/40 FPS and
Vicon’s sampling rate to 240Hz, which are also the annotation frequency of the captured APS frame and accumulated events (i.e., accumulated every 1=240 second), respectively.
