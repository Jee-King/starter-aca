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
![](vicon.jpg)

### **About FE108**
 ----------------------------------------------------------------------------------------- 

The FE108 dataset is captured by a DAVIS346 eventbased camera, which equips a 346x260 pixels dynamic vision sensor (DVS) and an active pixel sensor (APS). It
can simultaneously provide events and aligned grayscale images of a scene. The ground truth bounding boxes of a moving target are provided by the Vicon motion capture
system, which captures motion with a high sampling rate (up to 330Hz) and sub-millimeter precision. During the capturing process, we fix APS’s frame rate to 20/40 FPS and
Vicon’s sampling rate to 240Hz, which are also the annotation frequency of the captured APS frame and accumulated events, respectively.
FE108 is featured in 

**> High-quality label**. The Vicon system can provide the 3D position and trajectory of targets in sub-millimeter precision.

**> Diversity in target.** 21 classes, which can be divided into three categories: animal, vehicle, and daily goods (e.g., bottle, box).

**> Real world challenges.** Low light, high dynamic range, fast motion, motion blur and so on.


### **Download**
-----------------------------------------------------------------------------------------

link?

email?


### **Data File Structure**
-----------------------------------------------------------------------------------------


### **Preview of Sample Videos**
-----------------------------------------------------------------------------------------
{{<youtube EeMRO8XVv04>}}

### **Reference**
-----------------------------------------------------------------------------------------
Please consider citing FE108 if it is helpful for you :)

 ```python
Object Tracking by Jointly Exploiting Frame and Event Domain 

Jiqing Zhang, Xin Yang, Yingkai Fu, Xiaopeng Wei, Baocai Yin, Bo Dong

IEEE International Conference on Computer Vision (ICCV), July, 2021
 ```
