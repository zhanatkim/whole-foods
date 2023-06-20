import React from "react";

export const FarmCards = [
  {
    id: 1,
    title: "Еда намного вкуснее",
    isNegative: false,
    text:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    icon: (
      <svg
        class="svg-icon"
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6421 46.1656C36.3904 46.1656 46.7249 35.831 46.7249 23.0828C46.7249 10.3345 36.3904 0 23.6421 0C10.8938 0 0.559326 10.3345 0.559326 23.0828C0.559326 35.831 10.8938 46.1656 23.6421 46.1656Z"
          fill="#D8ECFE"
        />
        <path
          d="M46.7247 23.0832C46.7247 35.8314 36.3906 46.1655 23.6424 46.1655C16.8519 46.1655 10.7459 43.2331 6.52194 38.5661C10.6173 42.2718 16.0483 44.5279 22.0049 44.5279C34.7531 44.5279 45.0872 34.1938 45.0872 21.4456C45.0872 15.4859 42.8289 10.0529 39.1201 5.95746C43.7903 10.1814 46.7247 16.2895 46.7247 23.0832V23.0832Z"
          fill="#C4E2FF"
        />
        <path
          d="M23.6421 39.1742C32.5292 39.1742 39.7336 31.9698 39.7336 23.0828C39.7336 14.1957 32.5292 6.99127 23.6421 6.99127C14.755 6.99127 7.55063 14.1957 7.55063 23.0828C7.55063 31.9698 14.755 39.1742 23.6421 39.1742Z"
          fill="#B3DAFE"
        />
        <path
          d="M39.7336 23.0832C39.7336 31.97 32.5292 39.1744 23.6424 39.1744C18.781 39.1744 14.4243 37.0196 11.4742 33.6128C14.2968 36.0581 17.9784 37.5368 22.0048 37.5368C30.8917 37.5368 38.096 30.3324 38.096 21.4456C38.096 17.4191 36.6173 13.7376 34.1719 10.915C37.5787 13.8651 39.7336 18.2218 39.7336 23.0832V23.0832Z"
          fill="#8AC9FE"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Натуральные продукты",
    isNegative: false,
    text:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    icon: (
      <svg
        class="svg-icon"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.9438 23.1142C30.5213 23.5601 29.924 23.795 29.3096 23.757C29.0971 23.7435 24.0455 23.3963 18.8786 20.612C13.996 17.9809 8.10402 12.6421 7.76189 2.14911C7.74308 1.57686 7.96216 1.02254 8.36684 0.617639C8.98416 0 9.70865 0 10.0181 0C10.0182 0 10.0182 0 10.0182 0C10.237 0 15.3825 0.0369686 20.6842 3.21595C23.4364 4.8663 25.7245 7.06025 27.4852 9.73709C29.6122 12.9709 30.9618 16.9109 31.4969 21.4474C31.5689 22.0577 31.3662 22.6681 30.9438 23.1142Z"
          fill="#6DC82A"
        />
        <path
          d="M27.5501 9.83966C26.6818 11.442 25.9496 13.2467 25.4241 15.2797C24.9516 16.6909 24.2301 19.1702 23.6346 22.6005C26.7757 23.5836 29.1649 23.7479 29.3096 23.757C29.924 23.7951 30.5212 23.5602 30.9438 23.1142C31.3662 22.6681 31.5688 22.0577 31.4968 21.4476C30.9673 16.9583 29.6387 13.0543 27.5501 9.83966Z"
          fill="#5EAC24"
        />
        <path
          d="M29.1674 19.5622L24.7062 15.2118L23.5298 9.34957C23.4367 8.88494 22.9847 8.58427 22.52 8.67724C22.0553 8.77043 21.7545 9.22269 21.8476 9.6871L22.5307 13.0904L20.0703 10.6912L18.8777 4.74828C18.7846 4.28365 18.3323 3.98331 17.8678 4.07595C17.4032 4.16914 17.1024 4.62129 17.1955 5.08581L17.8946 8.56961L12.1533 2.97138C11.8138 2.64063 11.2711 2.64763 10.9402 2.98669C10.6095 3.32597 10.6164 3.86901 10.9555 4.19965L17.2685 10.3557L12.8647 10.2805C12.3914 10.2675 12.0005 10.6498 11.9923 11.1235C11.9843 11.5972 12.3617 11.9877 12.8354 11.9959L19.0596 12.1023L21.9881 14.9581L17.5168 14.8819C17.0474 14.8714 16.6527 15.2512 16.6444 15.7249C16.6365 16.1986 17.0138 16.5891 17.4875 16.5973L23.779 16.7047L27.9692 20.7907C28.1361 20.9534 28.3521 21.0343 28.5679 21.0343C28.7911 21.0343 29.014 20.9477 29.1823 20.7753C29.5134 20.4359 29.5066 19.8929 29.1674 19.5622Z"
          fill="#4E901E"
        />
        <path
          d="M51.1681 0.646797C50.7456 0.200876 50.1483 -0.0340611 49.534 0.00400135C49.3215 0.0174544 44.2699 0.36472 39.103 3.14896C35.1326 5.28844 30.4951 9.2185 28.7167 16.2541C27.7453 19.1146 25.6054 26.872 26.1059 38.5522C26.1492 39.5627 26.982 40.3528 27.9839 40.3527C28.011 40.3527 28.0383 40.3521 28.0658 40.3509C29.1037 40.3064 29.909 39.4291 29.8646 38.3911C29.6052 32.3401 30.1034 27.3934 30.7455 23.7433C32.1902 23.6605 36.4949 23.1915 40.9086 20.545C43.6608 18.8947 45.9489 16.7007 47.7096 14.0239C49.8365 10.7901 51.1862 6.8501 51.7213 2.31356C51.7932 1.70325 51.5906 1.09283 51.1681 0.646797Z"
          fill="#91DC5A"
        />
        <path
          d="M48.4671 2.98673C48.1362 2.64756 47.5931 2.64067 47.254 2.97142L41.5132 8.56955L42.2123 5.08585C42.3054 4.62134 42.0046 4.16929 41.54 4.07599C41.076 3.98324 40.6233 4.2837 40.5301 4.74832L39.3374 10.6912L36.8771 13.0904L37.5602 9.68714C37.6533 9.22262 37.3525 8.77058 36.8878 8.67728C36.4234 8.58431 35.9712 8.88498 35.878 9.34961L34.7014 15.212L30.2401 19.5624C29.9009 19.8931 29.8942 20.4362 30.2248 20.7753C30.3931 20.9477 30.6158 21.0342 30.8392 21.0342C31.0551 21.0342 31.2712 20.9533 31.4379 20.7906L35.6282 16.7046L41.9198 16.5972C42.3935 16.5891 42.7709 16.1987 42.7629 15.7248C42.7549 15.2561 42.3724 14.8817 41.9055 14.8817C41.9005 14.8817 41.8955 14.8817 41.8905 14.8818L37.4192 14.958L40.3477 12.1022L46.5719 11.9958C47.0456 11.9877 47.4229 11.5973 47.4149 11.1234C47.407 10.6547 47.0245 10.2803 46.5576 10.2803C46.5525 10.2803 46.5475 10.2803 46.5426 10.2804L42.1387 10.3556L48.4517 4.19959C48.7911 3.86895 48.7979 3.3259 48.4671 2.98673Z"
          fill="#5EAC24"
        />
        <path
          d="M49.1304 44.8573C48.2652 44.8573 47.4572 45.101 46.7704 45.5231C45.7561 42.2044 42.6698 39.7903 39.0191 39.7903C38.614 39.7903 38.2162 39.8209 37.8272 39.8783C36.1723 36.0924 32.3962 33.4457 28.0003 33.4457C23.6044 33.4457 19.8282 36.0924 18.1734 39.8783C17.7842 39.8209 17.3863 39.7903 16.9814 39.7903C13.3307 39.7903 10.2446 42.2044 9.23014 45.5231C8.54337 45.101 7.73542 44.8573 6.87016 44.8573C4.37696 44.8573 2.35571 46.8786 2.35571 49.3718C2.35571 51.865 4.37696 53.8862 6.87016 53.8862C8.20628 53.8862 9.40634 53.3054 10.2328 52.383C11.6855 54.5629 14.1652 56 16.9813 56C19.2619 56 21.3213 55.0566 22.7939 53.5405C24.3358 54.3989 26.1103 54.8895 28.0003 54.8895C29.8902 54.8895 31.6648 54.3988 33.2066 53.5405C34.6795 55.0566 36.7387 56 39.0192 56C41.8353 56 44.3152 54.5631 45.7678 52.383C46.5943 53.3054 47.7944 53.8862 49.1304 53.8862C51.6236 53.8862 53.6448 51.865 53.6448 49.3718C53.6448 46.8785 51.6236 44.8573 49.1304 44.8573Z"
          fill="#CC7400"
        />
        <path
          d="M33.894 37.8347C34.9601 37.8347 35.9889 37.9925 36.961 38.2823C35.0442 35.3696 31.7476 33.4456 28.0002 33.4456C23.6042 33.4456 19.8281 36.0924 18.1733 39.8783C17.7841 39.8209 17.3862 39.7902 16.9813 39.7902C13.3306 39.7902 10.2445 42.2043 9.23005 45.523C8.54328 45.1009 7.73533 44.8572 6.87007 44.8572C4.37687 44.8572 2.35562 46.8785 2.35562 49.3717C2.35562 51.8649 4.37687 53.8861 6.87007 53.8861C8.20619 53.8861 9.40625 53.3053 10.2327 52.3829C11.6854 54.5628 14.1651 55.9999 16.9812 55.9999C19.2618 55.9999 21.3212 55.0565 22.7938 53.5404C23.4663 53.9148 24.1829 54.2189 24.934 54.4433C23.8214 52.7533 23.1722 50.7312 23.1722 48.5566C23.1722 42.6352 27.9725 37.8347 33.894 37.8347Z"
          fill="#AA6100"
        />
        <path
          d="M32.2641 47.992C33.3375 47.992 34.2077 47.1218 34.2077 46.0483C34.2077 44.9748 33.3375 44.1046 32.2641 44.1046C31.1906 44.1046 30.3204 44.9748 30.3204 46.0483C30.3204 47.1218 31.1906 47.992 32.2641 47.992Z"
          fill="#AA6100"
        />
        <path
          d="M40.101 52.5692C41.1745 52.5692 42.0447 51.699 42.0447 50.6255C42.0447 49.552 41.1745 48.6818 40.101 48.6818C39.0275 48.6818 38.1573 49.552 38.1573 50.6255C38.1573 51.699 39.0275 52.5692 40.101 52.5692Z"
          fill="#AA6100"
        />
        <path
          d="M38.9057 44.7226C39.3188 44.7226 39.6536 44.3877 39.6536 43.9746C39.6536 43.5616 39.3188 43.2267 38.9057 43.2267C38.4927 43.2267 38.1578 43.5616 38.1578 43.9746C38.1578 44.3877 38.4927 44.7226 38.9057 44.7226Z"
          fill="#AA6100"
        />
        <path
          d="M28.0002 52.1215C28.4132 52.1215 28.7481 51.7866 28.7481 51.3736C28.7481 50.9605 28.4132 50.6257 28.0002 50.6257C27.5871 50.6257 27.2523 50.9605 27.2523 51.3736C27.2523 51.7866 27.5871 52.1215 28.0002 52.1215Z"
          fill="#AA6100"
        />
        <path
          d="M30.3197 41.9273C30.7327 41.9273 31.0676 41.5924 31.0676 41.1794C31.0676 40.7663 30.7327 40.4315 30.3197 40.4315C29.9066 40.4315 29.5718 40.7663 29.5718 41.1794C29.5718 41.5924 29.9066 41.9273 30.3197 41.9273Z"
          fill="#AA6100"
        />
        <path
          d="M46.4133 48.7406C46.8264 48.7406 47.1612 48.4058 47.1612 47.9927C47.1612 47.5797 46.8264 47.2448 46.4133 47.2448C46.0003 47.2448 45.6654 47.5797 45.6654 47.9927C45.6654 48.4058 46.0003 48.7406 46.4133 48.7406Z"
          fill="#AA6100"
        />
        <path
          d="M42.0453 36.6391C43.1188 36.6391 43.989 35.7689 43.989 34.6954C43.989 33.6219 43.1188 32.7517 42.0453 32.7517C40.9718 32.7517 40.1016 33.6219 40.1016 34.6954C40.1016 35.7689 40.9718 36.6391 42.0453 36.6391Z"
          fill="#CC7400"
        />
        <path
          d="M46.4133 39.7895C46.8264 39.7895 47.1612 39.4547 47.1612 39.0416C47.1612 38.6286 46.8264 38.2937 46.4133 38.2937C46.0003 38.2937 45.6654 38.6286 45.6654 39.0416C45.6654 39.4547 46.0003 39.7895 46.4133 39.7895Z"
          fill="#CC7400"
        />
        <path
          d="M46.4133 36.1913C46.8264 36.1913 47.1612 35.8565 47.1612 35.4434C47.1612 35.0303 46.8264 34.6955 46.4133 34.6955C46.0003 34.6955 45.6654 35.0303 45.6654 35.4434C45.6654 35.8565 46.0003 36.1913 46.4133 36.1913Z"
          fill="#CC7400"
        />
        <path
          d="M12.308 35.9529C13.3814 35.9529 14.2517 35.0827 14.2517 34.0092C14.2517 32.9357 13.3814 32.0655 12.308 32.0655C11.2345 32.0655 10.3643 32.9357 10.3643 34.0092C10.3643 35.0827 11.2345 35.9529 12.308 35.9529Z"
          fill="#AA6100"
        />
        <path
          d="M9.0803 39.0416C9.49336 39.0416 9.82821 38.7068 9.82821 38.2937C9.82821 37.8807 9.49336 37.5458 9.0803 37.5458C8.66725 37.5458 8.3324 37.8807 8.3324 38.2937C8.3324 38.7068 8.66725 39.0416 9.0803 39.0416Z"
          fill="#AA6100"
        />
      </svg>
    )
  }
];

export const ShopCards = [
  {
    id: 1,
    title: "Просроченные продукты",
    isNegative: true,
    text:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    icon: (
      <svg
        class="svg-icon"
        width="56"
        height="50"
        viewBox="0 0 56 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.4274 17.9547L40.7038 17.0617C40.2394 15.9886 39.1717 15.2376 37.9279 15.2376H35.2826C33.7161 15.2376 32.428 16.4288 32.2744 17.9547H40.4274Z"
          fill="#FAC600"
        />
        <path
          d="M35.5907 17.9548V13.0339C35.5907 12.6958 35.3166 12.4217 34.9785 12.4217H27.5102C27.1722 12.4217 26.8981 12.6958 26.8981 13.0339V17.9548H35.5907Z"
          fill="#FE9901"
        />
        <path
          d="M29.9167 17.9548V13.0339C29.9167 12.6958 30.1908 12.4217 30.5289 12.4217H27.5102C27.1722 12.4217 26.8981 12.6958 26.8981 13.0339V17.9548H29.9167Z"
          fill="#FB8801"
        />
        <path
          d="M15.8878 17.9547H23.4164C23.1852 15.9431 21.4774 14.3806 19.4038 14.3806C17.6567 14.3806 16.1689 15.4895 15.6053 17.0419L15.8878 17.9547Z"
          fill="#80D261"
        />
        <path
          d="M15.8878 17.9547H17.8553C18.0386 16.36 19.15 15.0482 20.6361 14.5726C20.2476 14.4483 19.8336 14.3806 19.4039 14.3806C17.6568 14.3806 16.169 15.4895 15.6054 17.0419L15.8878 17.9547Z"
          fill="#68CA44"
        />
        <path
          d="M28.5531 17.9547C28.0418 16.3097 26.5076 15.1151 24.6944 15.1151C22.8812 15.1151 21.3469 16.3096 20.8356 17.9547H28.5531Z"
          fill="#00A7D3"
        />
        <path
          d="M23.5884 17.9547C23.9635 16.7483 24.8883 15.7841 26.0704 15.3558C25.6409 15.2002 25.1776 15.1151 24.6944 15.1151C22.8811 15.1151 21.3468 16.3096 20.8355 17.9547H23.5884Z"
          fill="#0096D3"
        />
        <path
          d="M14.869 2.96664C15.1244 2.96664 15.3649 3.03117 15.5756 3.14416C15.787 2.89992 15.9576 2.5882 16.0567 2.22967C16.3331 1.22999 15.9551 0.253268 15.2126 0.0479714C14.47 -0.157325 13.644 0.486565 13.3676 1.48625C13.2184 2.02602 13.2613 2.55802 13.448 2.96664H14.869Z"
          fill="#D8ECFE"
        />
        <path
          d="M12.888 2.96664H13.7038C13.8918 2.40336 13.6746 1.64987 13.1037 1.07894C12.3703 0.345577 11.3342 0.192671 10.7894 0.737468C10.2446 1.28227 10.3975 2.31837 11.1309 3.05173C11.3194 3.2403 11.528 3.3897 11.743 3.49952C12.0185 3.17412 12.4293 2.96664 12.888 2.96664Z"
          fill="#C4E2FF"
        />
        <path
          d="M12.888 6.07655H14.8691C15.7544 6.07655 16.4787 5.35226 16.4787 4.46698C16.4787 3.5817 15.7544 2.85742 14.8691 2.85742H12.888C12.0027 2.85742 11.2784 3.5817 11.2784 4.46698C11.2783 5.35226 12.0027 6.07655 12.888 6.07655Z"
          fill="#5A5A5A"
        />
        <path
          d="M13.1249 4.46679C13.1249 3.58151 13.8492 2.85712 14.7346 2.85712H12.888C12.0027 2.85712 11.2784 3.58151 11.2784 4.46679C11.2784 5.35207 12.0027 6.07646 12.888 6.07646H14.7346C13.8493 6.07646 13.1249 5.35218 13.1249 4.46679Z"
          fill="#444444"
        />
        <path
          d="M46.0362 22.712C46.256 22.5855 46.51 22.512 46.7814 22.512H48.2327C48.3937 22.1134 48.4237 21.6102 48.2828 21.1004C48.0064 20.1008 47.1804 19.4569 46.4378 19.6622C45.6953 19.8675 45.3173 20.8442 45.5937 21.8439C45.6866 22.1803 45.8428 22.475 46.0362 22.712Z"
          fill="#D8ECFE"
        />
        <path
          d="M50.8609 20.3518C50.3161 19.807 49.28 19.9599 48.5467 20.6933C47.9989 21.241 47.7754 21.9575 47.9241 22.5122H48.7624C49.2433 22.5122 49.6711 22.7405 49.9458 23.0936C50.1472 22.9859 50.3423 22.8434 50.5196 22.6661C51.2528 21.9327 51.4057 20.8965 50.8609 20.3518Z"
          fill="#C4E2FF"
        />
        <path
          d="M48.7625 25.622H46.7814C45.8962 25.622 45.1719 24.8977 45.1719 24.0125C45.1719 23.1272 45.8962 22.4029 46.7814 22.4029H48.7625C49.6478 22.4029 50.3721 23.1272 50.3721 24.0125C50.3721 24.8976 49.6478 25.622 48.7625 25.622Z"
          fill="#5A5A5A"
        />
        <path
          d="M47.0311 24.0123C47.0311 23.127 47.7554 22.4026 48.6408 22.4026H46.7814C45.8961 22.4026 45.1718 23.1269 45.1718 24.0123C45.1718 24.8976 45.896 25.6219 46.7814 25.6219H48.6408C47.7555 25.622 47.0311 24.8976 47.0311 24.0123Z"
          fill="#444444"
        />
        <path
          d="M55.6303 26.1833C55.2519 25.9346 54.7432 26.0396 54.4942 26.4181L50.7934 32.0475H41.6625V40.9352H44.7117C44.989 40.9352 45.2146 41.1608 45.2146 41.438V48.4591H52.0561V33.1132L55.865 27.3194C56.1139 26.9407 56.0088 26.4321 55.6303 26.1833Z"
          fill="#FFE5C2"
        />
        <path
          d="M44.3539 40.8257V32.8677C44.3539 32.4146 44.721 32.0474 45.1742 32.0474H41.6625V40.8257H44.3539Z"
          fill="#FED2A4"
        />
        <path
          d="M32.9454 48.459V41.4379C32.9454 41.1606 33.171 40.9351 33.4482 40.9351H41.7719V18.7899L44.5772 9.72603C44.7112 9.29323 44.4689 8.83386 44.0361 8.69987C43.6028 8.56589 43.1438 8.80815 43.0099 9.24095L40.3468 17.8455H15.9684L13.3054 9.24095C13.1714 8.80815 12.7118 8.56589 12.2791 8.69987C11.8463 8.83386 11.604 9.29323 11.738 9.72603L14.5433 18.7899V48.459H32.9454Z"
          fill="#FFB392"
        />
        <path
          d="M14.5433 18.7899V26.6748H16.999C17.2515 26.6748 17.4094 26.9482 17.2831 27.167L15.3878 30.4498C16.7419 30.4603 18.0274 30.8309 19.139 31.4822V17.8455H15.9684L13.3054 9.24095C13.1714 8.80815 12.7118 8.56589 12.2791 8.69987C11.8463 8.83386 11.604 9.29323 11.738 9.72603L14.5433 18.7899Z"
          fill="#FFA381"
        />
        <path
          d="M13.5064 30.5579C13.5079 30.5579 13.5093 30.5578 13.5108 30.5578H15.3253L17.2831 27.1669C17.4094 26.9481 17.2515 26.6747 16.9989 26.6747H11.8327C11.5802 26.6747 11.4222 26.9481 11.5485 27.1669L13.5064 30.5579Z"
          fill="#838383"
        />
        <path
          d="M13.5063 30.5579C13.5078 30.5579 13.5093 30.5578 13.5108 30.5578H15.3253L15.541 30.1842L13.799 27.1669C13.6727 26.9481 13.8306 26.6747 14.0832 26.6747H11.8327C11.58 26.6747 11.4222 26.9481 11.5485 27.1669L13.5063 30.5579Z"
          fill="#5A5A5A"
        />
        <path
          d="M4.46584 48.459H18.7414L18.5822 48.2775C18.0735 47.6973 17.8891 46.9071 18.089 46.1637L20.3336 37.8177C20.6538 36.6276 21.2995 35.591 22.1579 34.7915C20.9347 32.1772 18.2922 30.4485 15.3288 30.4485H13.5108C10.1001 30.4485 7.11392 32.7377 6.2281 36.0314L3.63667 45.6664C3.34956 46.734 3.72253 47.79 4.46584 48.459Z"
          fill="#5A5A5A"
        />
        <path
          d="M4.46585 48.459H8.16119C7.41788 47.7899 7.0448 46.734 7.33202 45.6664L9.92344 36.0313C10.7269 33.0437 13.2586 30.8828 16.2675 30.5068C15.9591 30.4683 15.6457 30.4484 15.3286 30.4484H13.5107C10.1 30.4484 7.11381 32.7375 6.22799 36.0313L3.63667 45.6664C3.34956 46.734 3.72253 47.7899 4.46585 48.459Z"
          fill="#444444"
        />
        <path
          d="M26.5409 33.0627H28.0996L29.7659 30.1768C29.8922 29.958 29.7342 29.6846 29.4817 29.6846H25.1589C24.9063 29.6846 24.7484 29.958 24.8747 30.1768L26.5409 33.0627Z"
          fill="#838383"
        />
        <path
          d="M26.5409 33.0627H28.0996L28.3291 32.6653L26.8923 30.1768C26.766 29.958 26.9239 29.6846 27.1765 29.6846H25.1588C24.9062 29.6846 24.7483 29.958 24.8747 30.1768L26.5409 33.0627Z"
          fill="#5A5A5A"
        />
        <path
          d="M32.9454 48.459V41.4379C32.9454 41.1606 33.171 40.9351 33.4482 40.9351H35.2701L34.4173 37.7808C33.647 34.9319 31.0623 32.9533 28.1111 32.9533H26.5365C23.5821 32.9533 20.9954 34.9362 20.2282 37.7892L17.9835 46.1352C17.748 47.0108 18.0251 47.8773 18.6019 48.459H32.9454Z"
          fill="#5A5A5A"
        />
        <path
          d="M18.6017 48.459H22.2492C21.6725 47.8773 21.3953 47.0108 21.6308 46.1352L23.8755 37.7892C24.5515 35.2757 26.6398 33.4384 29.1474 33.0365C28.8087 32.9823 28.4626 32.9533 28.111 32.9533H26.5363C23.582 32.9533 20.9953 34.9362 20.228 37.7892L17.9833 46.1352C17.7478 47.0108 18.0251 47.8773 18.6017 48.459Z"
          fill="#444444"
        />
        <path
          d="M45.3239 48.459V41.4379C45.3239 41.0998 45.0498 40.8257 44.7117 40.8257H33.448C33.11 40.8257 32.8359 41.0998 32.8359 41.4379V48.459H45.3239Z"
          fill="#FD4755"
        />
        <path
          d="M36.0745 48.459V41.4379C36.0745 41.0998 36.3486 40.8257 36.6867 40.8257H33.4482C33.1101 40.8257 32.836 41.0998 32.836 41.4379V48.459H36.0745Z"
          fill="#FB2B3A"
        />
        <path
          d="M53.2207 49.9903H1.55475C1.10161 49.9903 0.734436 49.623 0.734436 49.17C0.734436 48.717 1.10161 48.3497 1.55475 48.3497H53.2207C53.6738 48.3497 54.041 48.717 54.041 49.17C54.041 49.623 53.6738 49.9903 53.2207 49.9903Z"
          fill="#838383"
        />
        <path
          d="M10.6148 22.7844C10.1617 22.7844 9.79453 22.4172 9.79453 21.9641V21.5266C9.79453 21.0736 10.1617 20.7063 10.6148 20.7063C11.068 20.7063 11.4352 21.0736 11.4352 21.5266V21.9641C11.4352 22.4172 11.0679 22.7844 10.6148 22.7844ZM10.6148 19.6126C10.1617 19.6126 9.79453 19.2453 9.79453 18.7922V18.3547C9.79453 17.9017 10.1617 17.5344 10.6148 17.5344C11.068 17.5344 11.4352 17.9017 11.4352 18.3547V18.7922C11.4352 19.2453 11.0679 19.6126 10.6148 19.6126ZM10.1812 16.5104C9.88291 16.5104 9.59536 16.3472 9.45011 16.0633C9.39783 15.9612 9.33909 15.8606 9.27566 15.7644C9.02606 15.3863 9.13019 14.8775 9.5083 14.6279C9.88608 14.3782 10.3951 14.4823 10.6448 14.8604C10.7416 15.0071 10.8312 15.1604 10.9109 15.3164C11.1172 15.7198 10.9574 16.2139 10.5539 16.4202C10.4344 16.4814 10.3068 16.5104 10.1812 16.5104ZM7.81834 14.5216C7.73817 14.5216 7.65658 14.5098 7.57575 14.4847C7.46539 14.4506 7.35219 14.4224 7.2392 14.4006C6.79437 14.3152 6.503 13.8852 6.58842 13.4403C6.67384 12.9954 7.10248 12.704 7.54873 12.7894C7.72067 12.8224 7.89283 12.8654 8.0605 12.9173C8.4933 13.0512 8.73567 13.5105 8.6018 13.9433C8.49297 14.2955 8.16867 14.5216 7.81834 14.5216ZM4.66791 14.3011C4.63028 14.3011 4.59233 14.2985 4.55394 14.2932C4.38331 14.2695 4.21203 14.237 4.04469 14.1966C3.60434 14.0903 3.33353 13.6471 3.43995 13.2067C3.54627 12.7663 3.98945 12.4954 4.42991 12.6018C4.54486 12.6296 4.66266 12.6519 4.7798 12.6682C5.22856 12.7306 5.54181 13.1449 5.47936 13.5936C5.42227 14.0039 5.07073 14.3011 4.66791 14.3011ZM1.93419 12.8272C1.70658 12.8272 1.48017 12.733 1.31797 12.5487C1.20433 12.4195 1.09594 12.2836 0.99575 12.1444C0.730844 11.7768 0.814188 11.2642 1.1818 10.9994C1.5493 10.7346 2.06194 10.8178 2.32684 11.1854C2.39608 11.2816 2.471 11.3756 2.54975 11.465C2.849 11.8052 2.81597 12.3235 2.4757 12.6227C2.31984 12.7598 2.12658 12.8272 1.93419 12.8272ZM0.820422 9.92904C0.371875 9.92904 0.00579687 9.56821 0.0004375 9.11846L0 9.05492C0.000109375 8.90343 0.0065625 8.75151 0.0191406 8.60265C0.0574219 8.15126 0.455 7.81504 0.905625 7.85442C1.35712 7.89259 1.69203 8.28951 1.65397 8.7409C1.64522 8.84437 1.64073 8.95024 1.64062 9.05557L1.64084 9.09888C1.64631 9.55192 1.28341 9.92357 0.830484 9.92893C0.827203 9.92904 0.823703 9.92904 0.820422 9.92904ZM1.86331 7.00501C1.67748 7.00501 1.49045 6.94212 1.33689 6.81349C0.989625 6.52245 0.944016 6.0051 1.23506 5.65784C1.34542 5.52615 1.46366 5.39829 1.58659 5.27787C1.90991 4.96079 2.42933 4.96582 2.74652 5.28957C3.06359 5.6131 3.05845 6.13253 2.73481 6.4496C2.65016 6.53262 2.56856 6.62078 2.49244 6.71167C2.33023 6.90526 2.09759 7.00501 1.86331 7.00501ZM4.5593 5.46578C4.16445 5.46578 3.81653 5.18009 3.75069 4.7777C3.67752 4.33057 3.9807 3.90893 4.42772 3.83576C4.59736 3.80809 4.77006 3.78829 4.94123 3.77713C5.39328 3.74738 5.78364 4.09038 5.81317 4.54243C5.84259 4.99448 5.49992 5.38495 5.04787 5.41437C4.92942 5.42203 4.80988 5.4357 4.69263 5.45495C4.64778 5.46217 4.60316 5.46578 4.5593 5.46578ZM8.16616 5.40649H7.72866C7.27552 5.40649 6.90834 5.03921 6.90834 4.58618C6.90834 4.13315 7.27552 3.76587 7.72866 3.76587H8.16616C8.6193 3.76587 8.98647 4.13315 8.98647 4.58618C8.98647 5.03921 8.6193 5.40649 8.16616 5.40649Z"
          fill="#C4E2FF"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Некачественное мясо",
    isNegative: true,
    text:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    icon: (
      <svg
        class="svg-icon"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_107_1368)">
          <path
            d="M46.6666 26.1333V32.6666C46.6666 41.16 37.3333 46.6666 30.268 42.4293L24.668 39.06C23.8013 38.5352 22.8064 38.2607 21.7933 38.2666C20.5258 38.1774 19.2639 38.5052 18.2 39.2C16.4617 40.3595 14.2285 40.4755 12.3795 39.5023C10.5304 38.5291 9.36167 36.6226 9.33331 34.5333V28C9.33331 29.1946 9.72531 28.8866 10.444 29.8666C11.5444 31.3236 13.286 32.1525 15.1106 32.088C18.032 32.088 18.3493 30.2213 21.2706 30.2213C22.4482 30.1376 23.6234 30.4143 24.64 31.0146L30.24 34.0013C34.1693 36.3626 39.1066 35.9613 43.3626 31.7053C45.416 29.708 46.6666 29.232 46.6666 26.1333Z"
            fill="#DF4D60"
          />
          <path
            d="M46.6666 26.1333C46.6666 34.9533 37.0626 39.984 30.268 35.896L24.668 32.5266C23.6459 31.9231 22.4638 31.6463 21.28 31.7333C18.3586 31.7333 18.0413 33.6 15.12 33.6C13.6027 33.6506 12.1299 33.083 11.039 32.0273C9.94802 30.9715 9.33247 29.5181 9.33331 28V27.0666C9.33331 17.7333 21.4666 12.1333 30.8 12.1333C41.0666 12.1333 46.6666 18.4053 46.6666 26.1333Z"
            fill="#FB7B76"
          />
          <path
            d="M29.8667 16.8C29.3689 16.8006 28.9582 16.4105 28.9334 15.9133C28.9206 15.6578 29.0132 15.4083 29.1897 15.223C29.3661 15.0377 29.6109 14.933 29.8667 14.9334H30.8C31.3155 14.9334 31.7334 15.3512 31.7334 15.8667C31.7334 16.3821 31.3155 16.8 30.8 16.8H29.8667Z"
            fill="white"
          />
          <path
            d="M13.6827 25.2C13.5506 25.1994 13.4202 25.1708 13.3 25.116C12.8317 24.9039 12.6231 24.3531 12.8333 23.884C14.9053 19.2827 20.9627 16.52 25.9 15.484C26.4155 15.3757 26.9211 15.7059 27.0293 16.2213C27.1376 16.7368 26.8075 17.2424 26.292 17.3507C20.5987 18.5547 15.9693 21.4387 14.4947 24.7053C14.3346 25.0061 14.0233 25.1957 13.6827 25.2Z"
            fill="white"
          />
          <path
            d="M36.4 27.0666C38.4619 27.0666 40.1334 25.3952 40.1334 23.3333C40.1334 21.2714 38.4619 19.6 36.4 19.6C34.3382 19.6 32.6667 21.2714 32.6667 23.3333C32.6667 25.3952 34.3382 27.0666 36.4 27.0666Z"
            fill="#F5EFCA"
          />
          <path
            d="M28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 35.4261 53.05 42.548 47.799 47.799C42.548 53.05 35.4261 56 28 56ZM28 1.86667C13.567 1.86667 1.86667 13.567 1.86667 28C1.86667 42.433 13.567 54.1333 28 54.1333C42.433 54.1333 54.1333 42.433 54.1333 28C54.1333 13.567 42.433 1.86667 28 1.86667Z"
            fill="#E64C3C"
          />
          <path
            d="M47.1426 48.076C46.8946 48.0774 46.6561 47.98 46.48 47.8053L8.21332 9.53865C7.97323 9.30523 7.87591 8.96147 7.95801 8.63684C8.04011 8.31222 8.28916 8.05606 8.61135 7.96484C8.93353 7.87363 9.2799 7.96123 9.51998 8.19465L47.7867 46.4613C47.9633 46.6366 48.0627 46.8751 48.0627 47.124C48.0627 47.3728 47.9633 47.6114 47.7867 47.7867C47.6181 47.9637 47.3869 48.0676 47.1426 48.076Z"
            fill="#E64C3C"
          />
        </g>
        <defs>
          <clipPath id="clip0_107_1368">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
];
